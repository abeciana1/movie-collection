import type { UserT } from "@/types/api-response/user"

export enum WatchlistVisibilityEnum {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC"
}

export type WatchlistT = {
  id: string;
  name: string;
  description?: string;
  descriptionText?: string;
  slug: string;
  image?: string;
  visibility: WatchlistVisibilityEnum;
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