import { cva } from "class-variance-authority";

export const sectionWrapperTitle = "font-bold text-xl";

export const sectionWrapperDescription = cva("text-md text-popover-foreground", {
  variants: {
    description: {
      true: "mb-3",
      false: "",
    }
  },
  defaultVariants: {
    description: true,
  }
})

export const sectionWrapperLink = "flex items-center gap-2 text-md font-semibold"

export const sectionWrapperHeaderContainer = "flex items-center justify-between gap-4"