import { cva } from "class-variance-authority";

export const cardContainer = "grid min-w-0 flex-1 [&>div]:w-full"

export const cardOverride = cva("xl:aspect-[3/2] min-h-0 w-full overflow-hidden p-0", {
  variants: {
    addBorder: {
      true: "",
      false: "border-none",
    }
  },
  defaultVariants: {
    addBorder: false,
  },
})

export const cardContentInner =
  "relative flex min-h-0 flex-1 flex-col justify-center p-6";

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

export const cardChildrenWrapper = "relative z-10" 
