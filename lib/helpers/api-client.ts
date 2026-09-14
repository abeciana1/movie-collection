import type { ApiFetchOptions, HttpMethod } from "@/types/api";

export function createApiClient(baseUrl: string, defaultHeaders: HeadersInit = {}) {
  const apiFetch = async function <TResponse>(
    method: HttpMethod,
    path: string,
    options: ApiFetchOptions = {},
  ): Promise<TResponse> {
    const { params, json, headers, next, ...rest } = options;
    const url = new URL(path, baseUrl);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) url.searchParams.set(key, String(value));
      });
    }
    const res = await fetch(url.toString(), {
      ...rest,
      method,
      headers: { "Content-Type": "application/json", ...defaultHeaders, ...(headers || {}) },
      body: json !== undefined ? JSON.stringify(json) : undefined,
      next,
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`API ${res.status} ${res.statusText}: ${text}`);
    }
    if (res.status === 204) return undefined as TResponse;
    return (await res.json()) as TResponse;
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