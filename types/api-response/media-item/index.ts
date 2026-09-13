import type { UserT } from "@/types/api-response/user"

export enum MediaItemFormatEnum {
  DVD = "DVD",
  BLU_RAY = "BLU_RAY",
  FOUR_K = "4K",
  VHS = "VHS"
}

export type MediaItemT = {
  id: string;
  format: MediaItemFormatEnum;
  upc: string;
  shelfLocation?: string;
  acquiredDate: Date;
  userId: string;
  user: UserT;
}

export interface ApiMediaItemAttributes extends Pick<MediaItemT,
  "format" | "upc" | "shelfLocation" | "acquiredDate"> {}