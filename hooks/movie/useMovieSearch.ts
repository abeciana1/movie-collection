"use client"
import useSWR from "swr"
import useDebounce from "@/hooks/useDebounce"
import { API_INTERNAL, getApiInternalBaseUrl } from "@/lib/api-internal/constants"
import { buildUrl } from "@/lib/helpers/api-client"
import type { ApiError } from "@/lib/api-external/types"
import { internalFetcher } from "@/lib/helpers/fetcher"
import type { SearchResult } from "@/types/api-response/movie"

const MIN_QUERY_LENGTH = 2

const useMovieSearch = (query: string) => {
  const debouncedQuery = useDebounce(query.trim(), 300)

  const key =
    debouncedQuery.length >= MIN_QUERY_LENGTH
      ? buildUrl(getApiInternalBaseUrl("movie"), API_INTERNAL.movie.endpoints.search, {
          query: debouncedQuery,
        })
      : null

  const { data, error, isLoading } = useSWR<SearchResult, ApiError>(
    key,
    (url: string) => internalFetcher<SearchResult>(url),
    { keepPreviousData: true, revalidateOnFocus: false }
  )

  return { data, error, isLoading }
}

export default useMovieSearch