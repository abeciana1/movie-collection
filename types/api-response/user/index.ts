import type { WatchlistT, ApiWatchlistAttributes } from "@/types/api-response/watchlist"
import type { MediaItemT, ApiMediaItemAttributes } from "@/types/api-response/media-item"
import type { DiaryEntryT, ApiDiaryEntryAttributes } from "@/types/api-response/diary-entry"

export type UserT = {
  id: string;
  name: string;
  email: string;
  image?: string;
  emailVerified?: boolean;
  createdAt: Date;
  updatedAt: Date;
  watchlists?: WatchlistT[];
  diaryEntries?: DiaryEntryT[];
  _count?: {
    watchlists?: number;
    diaryEntries?: number;
  }
  mediaItems?: MediaItemT[];
}

export interface ApiUserAttributes extends Pick<UserT, 
  "name" | "email" | "image" | "emailVerified"> {
    watchlists?: ApiWatchlistAttributes[];
    diaryEntries?: ApiDiaryEntryAttributes[];
    mediaItems?: ApiMediaItemAttributes[];
}

export interface ApiUserResource {
  type: "user";
  id: string;
  attributes: ApiUserAttributes;
  relationships: Record<string, unknown>;
}

export interface ApiUserAuthMeta {
  accessToken?: string;
  accessTokenExpiresAt?: string;
  providerId?: string;
}

export interface ApiUserAuthResponse {
  data: ApiUserResource;
  meta: ApiUserAuthMeta;
}