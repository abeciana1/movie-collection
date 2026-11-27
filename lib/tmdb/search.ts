import { API_EXTERNAL } from '@/lib/api-external/constants'
import { TMDB } from '@/lib/helpers/tmdb-client'
import type { TmdbMultiResponse } from '@/types/api-response/movie';

export const searchTMDB = async (query: string) => {
  return await TMDB.get<TmdbMultiResponse>(API_EXTERNAL.tmdb.endpoints.search.multi, { params: { query } })
}