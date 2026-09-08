import { cn } from "@/lib/utils"
import { CardProps } from "@/types/ui/card"
import { GradientOptions } from "@/types/general"
import Gradient from "@/components/movie/Gradient"

function Card({
  className,
  enableGradient = false,
  variant = "sunriseDrift",
  gradientXFlip = false,
  gradientYFlip = false,
  ...props
}: CardProps) {
  return (
    <div className="relative flex mx-auto">
      <div
        data-slot="card"
        className={cn(
          "relative z-50 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          className
        )}
        {...props}
      />
      {enableGradient && (
        <div className="z-0 absolute rounded-full right-0 md:-right-40 h-56 sm:h-40 md:h-80 w-80 md:w-200 blur-3xl sm:opacity-70 overflow-hidden">
          <Gradient
            tone={variant as GradientOptions}
          />
        </div>
      )}
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};