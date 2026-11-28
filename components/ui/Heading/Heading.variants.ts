import { cva } from "class-variance-authority";

export const headingVariants = cva("", {
  variants: {
    bold: {
      true: "font-bold",
      false: ""
    },
    italic: {
      true: "font-italic",
      false: ""
    },
    underline: {
      true: "underline",
      false: ""
    },
    strikethrough: {
      true: "line-through",
      false: ""
    },
    uppercase: {
      true: "uppercase",
      false: ""
    },
    lowercase: {
      true: "lowercase",
      false: ""
    },
    capitalize: {
      true: "capitalize",
      false: ""
    },
    center: {
      true: "text-center",
      false: ""
    },
    left: {
      true: "text-left",
      false: ""
    },
    right: {
      true: "text-right",
      false: ""
    },
    semiBold: {
      true: "font-semibold",
      false: ""
    },
    fontWeightLight: {
      true: "font-light",
      false: ""
    },
    fontWeightMedium: {
      true: "font-medium",
      false: ""
    },
  }
})