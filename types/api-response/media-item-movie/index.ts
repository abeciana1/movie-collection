
import type { ApiMovieAttributes, MovieT } from "@/types/api-response/movie";
import type { ApiMediaItemAttributes, MediaItemT } from "@/types/api-response/media-item";

export type MediaItemMovieT = {
  mediaItemId: string;
  movieId: string;
  movie: MovieT;
  mediaItem: MediaItemT;
}

export interface ApiMediaItemMovieAttributes extends Pick<MediaItemMovieT,
  "mediaItemId" | "movieId"
> {
  movie: ApiMovieAttributes;
  mediaItem: ApiMediaItemAttributes;
}