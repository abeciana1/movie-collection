import { API_EXTERNAL } from '@/lib/api-external/constants'
import { TMDB } from '@/lib/helpers/tmdb-client'

export const searchTMB = async (query: string) => {
  return await TMDB.get(API_EXTERNAL.tmdb.endpoints.search.multi, { params: { query } })
}