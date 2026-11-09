import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";

interface PromoCardContainerProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundAltText?: string;
}

export const PromoCardContainer = ({
  children,
  backgroundImage,
  backgroundAltText = "background",
}: PromoCardContainerProps) => {
  return (
    <Card className="p-0">
      <CardContent className="p-0">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt={backgroundAltText}
            width={500}
            height={300}
            className="rounded-lg"
          />
        )}
        {children}
      </CardContent>
    </Card>
  );
};
