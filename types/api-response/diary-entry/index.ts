import type { UserT } from "@/types/api-response/user";
import type { MovieT, ApiMovieAttributes } from "@/types/api-response/movie";

export type DiaryEntryT = {
  id: string;
  title: string;
  movieId: string;
  watchedDate: string;
  rating: number; // 0-10, half-star increments (divide by 2 for display)
  createdAt: string;
  slug: string;
  updatedAt: string;
  userId: string;
  user: Pick<UserT, "name">;
  movie: MovieT;
  notes: string;
  notesText: string;
  rewatchCount: number;
  rewatch: boolean;
}

export interface ApiDiaryEntryAttributes extends Pick<DiaryEntryT,
  "title" | "watchedDate" | "createdAt" | "updatedAt" | "rating" | "notes" | "slug" | "notesText" | "rewatchCount" | "rewatch"> {
    movie: Pick<ApiMovieAttributes, "title" | "posterPath" | "releaseYear" | "tmdbId" | "notes" | "watchlistItems">;
  }

