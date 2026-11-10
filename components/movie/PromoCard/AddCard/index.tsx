import { PromoCardContainer } from "@/components/movie/PromoCard/Container";
import ProjectorImage from "@/public/Vintage Film Reel in Golden Light.png";
import { CardTitle, CardDescription } from "@/components/ui/Card";
import { preheadingTitle, headingTitle, cardDescription } from "./AddCard.variants";

export const AddCard = () => {
  return (
    <PromoCardContainer backgroundImage={ProjectorImage.src} addBackgroundImageOverlay>
      <div className="flex flex-col gap-4">
        <p className={preheadingTitle}>
          <span>WATCH</span>
          <span>COLLECT</span>
          <span>ENJOY</span>
        </p>
        <CardTitle className={headingTitle}>
          A home for the movies you love.
        </CardTitle>
        <CardDescription className={cardDescription}>
          <span>Track what you want to watch.</span>
          <span>Build a collection that matters.</span>
        </CardDescription>
      </div>
    </PromoCardContainer>
  );
};