// components/motion-ui/gradient.tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const gradientLayerVariants = cva("absolute inset-0 pointer-events-none mix-blend-multiply", {
  variants: {
    tone: {
      "sunriseDrift": "bg-[linear-gradient(rgba(0,0,0,0)_0%,rgba(0,138,255,0.1)_30%,rgb(255,255,255)_20%,rgb(247,164,66)_70%,rgb(233,66,247)_100%)]",
      // sunset: "bg-[linear-gradient(...)]",  <- next variant goes here
    },
  },
  defaultVariants: { tone: "sunriseDrift" },
});

interface GradientProps extends VariantProps<typeof gradientLayerVariants> {
  children?: React.ReactNode;
  className?: string;
}

const Gradient = ({ tone, children, className }: GradientProps) => {
  return (
    <div className={cn("relative overflow-hidden min-h-screen", className)}>
      <div className={cn(gradientLayerVariants({ tone }), "blur-[75px] md:blur-[108px]")} aria-hidden="true" />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
};

export default Gradient;