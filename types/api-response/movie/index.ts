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
}

export interface ApiMovieAttributes extends Pick<MovieT,
  "title" | "posterPath" | "releaseYear" | "tmdbId" | "notes"> {
    watchlistItems: ApiWatchlistItemAttributes[];
  }