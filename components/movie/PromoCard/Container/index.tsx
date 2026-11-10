import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";

interface PromoCardContainerProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundAltText?: string;
}

export const PromoCardContainer = ({
  children,
  backgroundImage,
  backgroundAltText = "", // decorative by default
}: PromoCardContainerProps) => {
  return (
    <div className="min-w-0 flex-1">
      <Card className="w-full overflow-hidden p-0 border-none">
        <CardContent className="p-0">
          <div className="relative flex min-h-80 flex-col justify-center p-8 md:min-h-96 md:p-12">
            {backgroundImage && (
              <>
                <Image
                  src={backgroundImage}
                  alt={backgroundAltText}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover object-right"
                  loading="eager"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-background/55"
                />
              </>
            )}
            <div className="relative z-10 max-w-sm">{children}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};