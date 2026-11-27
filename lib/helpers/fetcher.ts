// lib/helpers/fetcher.ts
import { readResponse } from "@/lib/api-external/readResponse"

export const internalFetcher = async <T>(url: string): Promise<T> =>
  (await readResponse(await fetch(url))) as T;