import type { ProviderId } from "@/types/api/auth"

export const authProviderLookup = (text: string): ProviderId => {
  if (text?.includes("google")) {
    return "google"
  } else {
    return "google"
  }
}