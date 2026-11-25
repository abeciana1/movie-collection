import { createApiClient } from "./api-client";
import { getApiExternalBaseUrl } from "@/lib/api-external/constants"

export const TMDB = createApiClient(
  () => getApiExternalBaseUrl("tmdb"),
  () => ({ Authorization: `Bearer ${getTmdbToken()}` })
)

export const getTmdbToken = (): string => {
  const token = process.env.TMDB_API_KEY;
  if (!token) {
    throw new Error(
      `[api-external] Missing required environment variable: TMDB_API_KEY`
    );
  }
  return token;
}