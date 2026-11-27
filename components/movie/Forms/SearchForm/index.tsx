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
import { useState } from "react"
import logger from "@/lib/helpers/logger"
import { Popover, PopoverContent, PopoverHeader, PopoverTitle } from "@/components/ui/popover"
import type { SearchResult } from "@/types/api-response/movie"

export const SearchForm = () => {
  const [ searchQuery, setSearchQuery ] = useState<string>("")
  const [ openResults, setOpenResults ] = useState<boolean>(false);
  const { data, error, isLoading } = useMovieSearch(searchQuery);

  logger("log", "Search query:", searchQuery);
  logger("log", "Search data:", data);
  logger("log", "Search error:", error);
  logger("log", "Search isLoading:", isLoading);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  return (
    <search>
      <form action="/search" className={searchInputGroup}>
        <FieldGroup>
          <FieldSet>
            <Field>
              <FieldLabel htmlFor="global-search" className={searchLabel}>
                Search for a movie, series, or actor
              </FieldLabel>
              <InputGroup className={searchInput}>
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
  );
};

interface SearchFormResultsProps {
  resultsLength: number;
  openResults: boolean;
  results: Pick<SearchResult, "joint">;
  searchQuery: string;
}

export const SearchFormResults = ({
  resultsLength,
  // openResults,
  // results,
  searchQuery
}: SearchFormResultsProps) => {
  return (
    <Popover>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Search Results for: {searchQuery}</PopoverTitle>
          <p>{resultsLength} results found</p>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}