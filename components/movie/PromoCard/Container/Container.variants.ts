import { cva } from "class-variance-authority";

export const cardContainer = "min-w-0 flex-1"

export const cardOverride = "w-full overflow-hidden p-0 border-none";

export const cardContentInner = "relative flex min-h-80 flex-col justify-center p-8 md:min-h-96 md:p-12";

export const cardBackgroundImage = cva("absolute inset-0", {
  variants: {
    addBackgroundImageOverlay: {
      true: "bg-background/55",
      false: "",
    },
  },
  defaultVariants: {
    addBackgroundImageOverlay: false,
  },
})

export const cardChildrenWrapper = "relative z-10 max-w-sm" 