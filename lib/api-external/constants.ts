// Registry of external (non-Contentful) APIs.
// Add a new API as a new entry: its own base URL and its own endpoints.

// `process.env.NEXT_PUBLIC_*` must be referenced statically so Next.js can
// inline it into client bundles, so each API reads its own variable here.
interface ApiExternalConfig {
  getBaseUrl: () => string | undefined;
  envVarName: string;
  // Prefix shared by every endpoint of this API (e.g. a version)
  basePath?: string;
  endpoints: Record<string, string | Record<string, string>>;
}

export const API_EXTERNAL = {
  tmdb: {
    getBaseUrl: (): string | undefined =>
      process.env.TMDB_API_KEY_URL,
    envVarName: "TMDB_API_KEY_URL",
    basePath: "/3/",
    endpoints: {
      search: {
        movie: "search/movie",
        tv: "search/tv",
        multi: "search/multi",
      }
    }
  }
} as const satisfies Record<string, ApiExternalConfig>;

export type ApiExternalName = keyof typeof API_EXTERNAL;

// Host plus the API's `basePath`. Resolved at request time, not module load,
// so a missing variable does not fail builds that never call the API.
export function getApiExternalBaseUrl(api: ApiExternalName): string {
  const {
    getBaseUrl,
    envVarName,
    basePath = "",
  }: ApiExternalConfig = API_EXTERNAL[api];
  const baseUrl = getBaseUrl();

  if (!baseUrl) {
    throw new Error(
      `[api-external] Missing required environment variable: ${envVarName}`
    );
  }

  return `${baseUrl.replace(/\/+$/, "")}${basePath}`;
}