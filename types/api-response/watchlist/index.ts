import type { UserT } from "@/types/api-response/user"

export type WatchlistVisibility = "PRIVATE" | "PUBLIC";

export type WatchlistT = {
  id: string;
  name: string;
  description?: string;
  descriptionText?: string;
  slug: string;
  image?: string;
  visibility: WatchlistVisibility;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user: UserT;
  _count?: {
    watchlistItems?: number;
  }
}

export interface ApiWatchlistAttributes extends Pick<WatchlistT,
  "name" | "description" | "descriptionText" | "slug" | "visibility" | "image"> {
    user: Pick<UserT, "name">;
    _count?: {
    watchlistItems?: number;
  }
}