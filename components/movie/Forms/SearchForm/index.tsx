import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export const SearchForm = () => {
  return (
    <search>
      <form>
        <FieldGroup>
          <FieldSet>
            <Field>
              <FieldLabel htmlFor="global-search">Search for a movie, series, or actor</FieldLabel>
              <Input
                id="global-search"
                placeholder="Search for a movie, series, or actor"
              />
            </Field>
          </FieldSet>
        </FieldGroup>
      </form>
    </search>
  )
}