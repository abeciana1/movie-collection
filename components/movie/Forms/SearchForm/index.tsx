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
import { Popover, PopoverContent, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover"
import type { SearchResult } from "@/types/api-response/movie"

export const SearchForm = () => {
  const [ searchQuery, setSearchQuery ] = useState<string>("")
  const anchorRef = useRef<HTMLDivElement>(null)
  const { data, error, isLoading } = useMovieSearch(searchQuery);

  logger("log", "Search query:", searchQuery);
  logger("log", "Search data:", data);
  logger("log", "Search error:", error);
  logger("log", "Search isLoading:", isLoading);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // setOpenResults(true);
  }

  return (
    <>
      <search>
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
      </search>
      <Popover open={searchQuery.length > 2}>
        <SearchFormResults
          results={data?.joint ?? []}
          searchQuery={searchQuery}
          anchorRef={anchorRef}
        />
      </Popover>
    </>
  );
};

interface SearchFormResultsProps {
  results: SearchResult["joint"];
  searchQuery: string;
  anchorRef: React.RefObject<HTMLDivElement | null>;
}

export const SearchFormResults = ({
  results,
  searchQuery,
  anchorRef
}: SearchFormResultsProps) => {
  logger("log", "SearchFormResults results:", results);
  return (
    <PopoverContent anchor={anchorRef} align="start" initialFocus={false}>
      <PopoverHeader>
        <PopoverTitle>Search Results for: {searchQuery}</PopoverTitle>
        <p>{results.length} results found</p>
      </PopoverHeader>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </PopoverContent>
  )
}