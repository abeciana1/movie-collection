import { cva } from "class-variance-authority";

export const genreSection = cva("flex gap-3 overflow-x-auto", {
  variants: {
    wrap: {
      true: "flex-wrap",
      false: "",
    }
  },
  defaultVariants: {
    wrap: false,
  }
})