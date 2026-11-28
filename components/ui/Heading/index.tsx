import { cn } from "@/lib/utils";
import { headingVariants } from "./Heading.variants";
import type { JSX, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { variantProps } from "motion/react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps extends VariantProps<typeof headingVariants> {
  children: ReactNode;
  className?: string;
  level?: HeadingLevel;
}

export const Heading = ({
  children,
  className,
  level = 1,
  ...variantProps
}: HeadingProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <HeadingTag className={cn(headingVariants(variantProps), className)}>
      {children}
    </HeadingTag>
  );
};
