import { PromoCardContainer } from "@/components/movie/PromoCard/Container";
import ProjectorImage from "@/public/project-image.jpg"
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { preheadingTitle, headingTitle } from "./AddCard.variants";
import { cn } from "@/lib/utils";

export const AddCard = () => {
  return (
    <PromoCardContainer backgroundImage={ProjectorImage.src} backgroundAltText="Projector in black background">
      <CardHeader>
        <CardTitle className={cn(preheadingTitle)}>
          <span>WATCH</span>
          <span>COLLECT</span>
          <span>ENJOY</span>
        </CardTitle>
        <CardTitle className={cn(headingTitle)}>
          <h2>A home for the movies you love.</h2>
        </CardTitle>
        <CardDescription>
          <span>Track what you want to watch.</span>
          <span>Build a collection that matters.</span>
        </CardDescription>
      </CardHeader>
    </PromoCardContainer>
  )
}