import type { ProviderId } from "@/types/auth";

export const authProviderLookup = (text: string): ProviderId => {
  if (text?.includes("google")) {
    return "google";
  } else {
    return "google";
  }
};
