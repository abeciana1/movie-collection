import type { WatchlistT, ApiWatchlistAttributes } from "@/types/api-response/watchlist";
import type { MovieT, ApiMovieAttributes } from "@/types/api-response/movie";


export type WatchlistItemT = {
  watchlistId: string;
  watchlist: WatchlistT;
  movieId: string;
  movie: MovieT;
  addedAt: string;
  description: string | null;
  descriptionText: string | null;
}

export interface ApiWatchlistItemAttributes extends Pick<WatchlistItemT,
  "addedAt" | "description" | "descriptionText"
> {
  movie: ApiMovieAttributes;
  watchlist: ApiWatchlistAttributes;
}