"use client"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  searchLabel,
  searchInputGroup,
  searchInput,
} from "./SearchFrom.variants";
import { Search } from "lucide-react";
import useMovieSearch from "@/hooks/movie/useMovieSearch"
import { useState, useRef } from "react"
import logger from "@/lib/helpers/logger"
import { Popover, PopoverContent, PopoverHeader, PopoverTitle } from "@/components/ui/popover"
import type { SearchResult } from "@/types/api-response/movie"
import { MovieDropdownItem } from "@/components/movie/Search/MovieDropdownItem"

export const SearchForm = () => {
  const [ searchQuery, setSearchQuery ] = useState<string>("")
  const anchorRef = useRef<HTMLDivElement>(null)
  const { data, error, isLoading } = useMovieSearch(searchQuery);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  return (
    <>
      <search className="relative">
        <form action="/search" className={searchInputGroup}>
          <FieldGroup>
            <FieldSet>
              <Field>
                <FieldLabel htmlFor="global-search" className={searchLabel}>
                  Search for a movie, series, or actor
                </FieldLabel>
                <InputGroup ref={anchorRef} className={searchInput}>
                  <InputGroupInput
                    id="global-search"
                    placeholder="Search for a movie, series, or actor"
                    name="query"
                    value={searchQuery}
                    type="search"
                    onChange={searchHandler}
                  />
                  <InputGroupAddon>
                    <Search />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </FieldSet>
          </FieldGroup>
        </form>
        <Popover open={searchQuery.length > 2}>
          {data && (
            <SearchFormResults
              results={data?.joint ?? []}
              searchQuery={searchQuery}
              anchorRef={anchorRef}
              status={"success"}
            />
          )}
          {isLoading && (
            <SearchFormResults
              results={[]}
              searchQuery={searchQuery}
              anchorRef={anchorRef}
              status={"loading"}
            />
          )}
          {error && (
            <SearchFormResults
              results={[]}
              searchQuery={searchQuery}
              anchorRef={anchorRef}
              status={"error"}
            />
          )}
        </Popover>
      </search>
    </>
  );
};

interface SearchFormResultsProps {
  results: SearchResult["joint"];
  searchQuery: string;
  anchorRef: React.RefObject<HTMLDivElement | null>;
  status: "loading" | "error" | "success";
}

export const SearchFormResults = ({
  results,
  searchQuery,
  anchorRef,
  status
}: SearchFormResultsProps) => {
  return (
    <PopoverContent anchor={anchorRef} align="start" initialFocus={false} className="max-h-96 overflow-auto w-(--anchor-width)">
      <PopoverHeader>
        {status === "loading" && <p>Loading...</p>}
        {status === "error" && <p>Error occurred while searching.</p>}
        {status === "success" && (
          <>
            <PopoverTitle>Search Results for: {searchQuery}</PopoverTitle>
            <p>{results.length} results found</p>
          </>
        )}
      </PopoverHeader>

      <ul className="space-y-4">
        {results.map((result) => (
          <li key={result.id}>
            <MovieDropdownItem
              id={result.id}
              title={result.title}
              poster_path={result.poster_path}
              release_date={result.release_date}
            />
          </li>
        ))}
      </ul>
    </PopoverContent>
  )
}
