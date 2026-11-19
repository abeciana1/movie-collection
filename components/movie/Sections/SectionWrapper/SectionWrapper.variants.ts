import { cva } from "class-variance-authority";

export const sectionWrapperTitle = "font-bold text-xl";

export const sectionWrapperDescription = "text-md text-popover-foreground";

export const sectionWrapperLink = "flex items-center gap-2 text-md"

export const sectionWrapperHeaderContainer = cva("flex items-center justify-between gap-4", {
  variants: {
    description: {
      true: "mb-6",
      false: "",
    }
  },
  defaultVariants: {
    description: true,
  }
})