export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type ApiFetchOptions = Omit<RequestInit, "method" | "body"> & {
  params?: Record<string, string | number | boolean | undefined>;
  // Next.js caching options:
  next?: {
    tags?: string[];
    revalidate?: number | false;
  };
  // We'll JSON.stringify this
  json?: unknown;
};