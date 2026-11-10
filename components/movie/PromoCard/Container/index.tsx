import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import {
  cardOverride,
  cardContainer,
  cardContentInner,
  cardBackgroundImage,
  cardChildrenWrapper,
} from "./Container.variants";
import { cn } from "@/lib/utils";

interface PromoCardContainerProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundAltText?: string;
  addBackgroundImageOverlay?: boolean;
}

export const PromoCardContainer = ({
  children,
  backgroundImage,
  backgroundAltText = "", // decorative by default
  addBackgroundImageOverlay = false
}: PromoCardContainerProps) => {
  return (
    <div className={cn(cardContainer)}>
      <Card className={cn(cardOverride)}>
        <CardContent className="p-0">
          <div className={cn(cardContentInner)}>
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
                <div aria-hidden className={cn(cardBackgroundImage({ addBackgroundImageOverlay}))} />
              </>
            )}
            <div className={cn(cardChildrenWrapper)}>{children}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
