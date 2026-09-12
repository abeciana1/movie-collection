import { type GradientOptions } from "@/types/general"

export type GradientProps = {
  gradientXFlip?: boolean;
  gradientYFlip?: boolean;
  variant?: GradientOptions;
  forcedFirstWidth?: number;
  forcedFirstHeight?: number;
  forcedSecondWidth?: number;
  forcedSecondHeight?: number;
};

export type CardProps = React.ComponentProps<"div"> & {
  enableGradient?: boolean;
  variant?: GradientOptions;
  gradientXFlip?: boolean;
  gradientYFlip?: boolean;
}