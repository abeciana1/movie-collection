// Registry of this app's own API routes (app/api/...), called from the browser.
// Add a new group as a new entry: its own base path and its own endpoints.

interface ApiInternalConfig {
  // Prefix shared by every route in the group. Must start with "/".
  basePath?: string;
  // Paths relative to `basePath`: no leading slash.
  endpoints: Record<string, string | Record<string, string>>;
}

export const API_INTERNAL = {
  movie: {
    basePath: "/api/movie",
    endpoints: {
      search: "search", // app/api/movie/search/route.ts
    },
  },
} as const satisfies Record<string, ApiInternalConfig>;

export type ApiInternalName = keyof typeof API_INTERNAL;

export function getApiInternalBaseUrl(api: ApiInternalName): string {
  const { basePath = "" }: ApiInternalConfig = API_INTERNAL[api];
  return basePath;
}