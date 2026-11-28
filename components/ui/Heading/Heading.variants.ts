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
    fontSize: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
    },
    srOnly: {
      true: "sr-only",
      false: ""
    }
  }
})