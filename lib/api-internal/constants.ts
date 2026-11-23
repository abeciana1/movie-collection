
interface ApiInternalConfig {
  basePath?: string;
  endpoints: Record<string, string | Record<string, string>>;
}

const internalMovieBasePath = "/api/movie"

export const API_INTERNAL = {
  movie: {
    basePath: internalMovieBasePath,
    endpoints: {
      search: `${internalMovieBasePath}/search`,
    }
  }
} as const satisfies Record<string, ApiInternalConfig>;

export type ApiInternalName = keyof typeof API_INTERNAL;

export function getApiInternalBaseUrl(api: ApiInternalName): string {
  const {
    basePath = "",
  }: ApiInternalConfig = API_INTERNAL[api];
  return `${basePath}`;
}