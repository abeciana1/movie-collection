import type { ApiFetchOptions, HttpMethod } from "@/types/api";
import { readResponse } from "../api-external/readResponse";

export function createApiClient(baseUrl: string | (() => string), defaultHeaders: HeadersInit | (() => HeadersInit) = {}) {
  const apiFetch = async function <TResponse>(
    method: HttpMethod,
    path: string,
    options: ApiFetchOptions = {},
  ): Promise<TResponse> {
    const { params, json, headers, next, ...rest } = options;
    const base = typeof baseUrl === "function" ? baseUrl() : baseUrl;
    const baseHeaders = typeof defaultHeaders === "function" ? defaultHeaders() : defaultHeaders;

    const url = buildUrl(base, path, params);
    const res = await fetch(url, {
      ...rest,
      method,
      headers: { "Content-Type": "application/json", ...baseHeaders, ...(headers || {}) },
      body: json !== undefined ? JSON.stringify(json) : undefined,
      next,
    });
    return (await readResponse(res)) as TResponse;
  };

  return {
    get: <TResponse>(path: string, options?: Omit<ApiFetchOptions, "json">) =>
      apiFetch<TResponse>("GET", path, options),
    post: <TResponse>(path: string, options?: ApiFetchOptions) =>
      apiFetch<TResponse>("POST", path, options),
    put: <TResponse>(path: string, options?: ApiFetchOptions) =>
      apiFetch<TResponse>("PUT", path, options),
    patch: <TResponse>(path: string, options?: ApiFetchOptions) =>
      apiFetch<TResponse>("PATCH", path, options),
    delete: <TResponse>(path: string, options?: Omit<ApiFetchOptions, "json">) =>
      apiFetch<TResponse>("DELETE", path, options),
  };
}

type QueryParamValue = string | number | boolean | null | undefined;

// Never fetched. It only lets `URL` parse a relative (same-origin) base like "/api/movie".
const PLACEHOLDER_ORIGIN = "http://placeholder.invalid";

export const buildUrl = (
  baseUrl: string,
  path: string,
  params?: Record<string, QueryParamValue>
): string => {
  const isAbsolute = /^https?:\/\//i.test(baseUrl);
  const base = `${baseUrl.replace(/\/+$/, "")}/`; // exactly one trailing slash
  const relativePath = path.replace(/^\/+/, ""); // no leading slash
  const url = new URL(
    relativePath,
    isAbsolute ? base : `${PLACEHOLDER_ORIGIN}${base}`
  );

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  // Absolute base (TMDB, UPC): full URL. Relative base (your own routes): path + query.
  return isAbsolute ? url.toString() : `${url.pathname}${url.search}`;
};