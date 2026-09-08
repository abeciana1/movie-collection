import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const GRADIENT_TONES = {
  sunriseDrift:
    "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,138,255,0.1) 30%, rgb(255,255,255) 20%, rgb(247,164,66) 70%, rgb(233,66,247) 100%)",
  // additional presets go here
} as const;

export type GradientOptions = keyof typeof GRADIENT_TONES;

const gradientWrapperVariants = cva(
  "absolute top-5 left-1/2 rounded-xl pointer-events-none", // overflow-hidden removed
  {
    variants: {
      xFlip: { true: "-scale-x-100", false: "" },
      yFlip: { true: "-scale-y-100", false: "" },
    },
    defaultVariants: { xFlip: false, yFlip: false },
  }
);

interface GradientProps
  extends VariantProps<typeof gradientWrapperVariants> {
  tone?: GradientOptions;
  className?: string;
}

const Gradient = ({ tone = "sunriseDrift", xFlip, yFlip, className }: GradientProps) => {
  const backgroundImage = GRADIENT_TONES[tone];

  return (
    <div
      className={cn(gradientWrapperVariants({ xFlip, yFlip }), className)}
      aria-hidden="true"
    >
      <div style={{ position: "absolute", inset: "-120px", backgroundImage, mixBlendMode: "multiply", filter: "blur(75px)" }} />
      <div style={{ position: "absolute", inset: "-200px", backgroundImage, mixBlendMode: "multiply", filter: "blur(125px)" }} />
    </div>
  );
};

export default Gradient;