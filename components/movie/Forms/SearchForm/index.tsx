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

export const SearchForm = () => {
  const [ searchQuery, setSearchQuery ] = useState<string>("")
  const { data, error, isLoading } = useMovieSearch(searchQuery);


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
                  value={searchQuery}
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
