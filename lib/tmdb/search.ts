import "server-only"
import { API_EXTERNAL } from '@/lib/api-external/constants'
import { TMDB } from '@/lib/helpers/tmdb-client'
import type { SearchResultItem } from '@/types/api-response/movie'

interface TmdbMovieResult {
  id: number;
  media_type: "movie";
  title: string;
  original_title: string;
  poster_path: string | null;
  release_date: string | null;
}

interface TmdbTVResult {
  id: number;
  media_type: "tv";
  name: string;
  original_name: string;
  poster_path: string | null;
  first_air_date: string | null;
}

type TmdbResult = TmdbMovieResult | TmdbTVResult;

interface TmdbMultiResponse {
  page: number;
  results: TmdbResult[];
  total_pages: number;
  total_results: number;
}

const toSearchResultItem = (raw: TmdbResult): SearchResultItem | null => {
  switch (raw.media_type) {
    case "movie":
      return {
        id: raw.id,
        media_type: "movie",
        title: raw.title,
        original_title: raw.original_title,
        poster_path: raw.poster_path,
        release_date: raw.release_date || null, // "" becomes null
      };
    case "tv":
      return {
        id: raw.id,
        media_type: "tv",
        title: raw.name,
        original_title: raw.original_name,
        poster_path: raw.poster_path,
        release_date: raw.first_air_date || null,
      };
    default:
      return null; // person
  }
};

export const searchTMDB = async (query: string, page = 1) => {
  const data = await TMDB.get<TmdbMultiResponse>(
    API_EXTERNAL.tmdb.endpoints.search.multi,
    { params: { query, page } }
  );

  const results = data.results
    .map(toSearchResultItem)
    .filter((item): item is SearchResultItem => item !== null);

  return { results, page: data.page, totalPages: data.total_pages };
};