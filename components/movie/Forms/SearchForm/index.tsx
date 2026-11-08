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

export const SearchForm = () => {
  return (
    <search>
      <form className={searchInputGroup}>
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
