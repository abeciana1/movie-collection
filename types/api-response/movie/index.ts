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

export interface TMDBMovie {
  title: string;
  originalTitle: string;
  posterPath: string;
  // overview: string;
  // mediaType: string;
  // genreIds: number[];
}

export interface TMDBTV {
  title: string;
  originalTitle: string;
  posterPath: string;
}

export interface SearchResult {
  results: {
    movie?: TMDBMovie[];
    tv?: TMDBTV[];
  };
}