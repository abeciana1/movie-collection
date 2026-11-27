import type { DiaryEntryT } from "@/types/api-response/diary-entry" 
import type { MediaItemT } from "@/types/api-response/media-item"
import type { WatchlistItemT, ApiWatchlistItemAttributes } from "@/types/api-response/watchlist-item"

export type MovieT = {
  id: string;
  title: string;
  posterPath?: string;
  releaseYear?: number;
  tmdbId?: number;
  notes?: DiaryEntryT[];
  mediaItems?: MediaItemT[];
  watchlistItems?: WatchlistItemT[];
  createdAt: string;
  updatedAt: string;
  _count?: {
    mediaItems?: MediaItemT[];
    watchlistItems?: WatchlistItemT[];
  }
}

export interface ApiMovieAttributes extends Pick<MovieT,
  "title" | "posterPath" | "releaseYear" | "tmdbId" | "notes"> {
    watchlistItems: ApiWatchlistItemAttributes[];
  }

export interface ApiMovieResponse {
  mediaType: "tv" | "movie" | "person";
}

export interface TMDBMovie {
  title: string;
  originalTitle: string;
  posterPath: string;
  releaseDate: string;
  // overview: string;
  // mediaType: string;
  // genreIds: number[];
}

export interface TMDBTV {
  title: string;
  originalTitle: string;
  posterPath: string;
  firstAirDate: string;
}

export interface SearchResult {
  results: {
    movie?: TMDBMovie[];
    tv?: TMDBTV[];
  };
}

export interface SearchResultItem {
  id: number;
  media_type: "movie" | "tv";
  title: string;
  original_title: string; // drop this if the UI never shows it
  poster_path: string | null;
  release_date: string | null; // release_date for movies, first_air_date for TV
}