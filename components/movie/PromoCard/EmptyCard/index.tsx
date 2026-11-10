import { PromoCardContainer } from "@/components/movie/PromoCard/Container";
import { CardTitle, CardDescription } from "@/components/ui/Card";
import { emptyCardContentContainer, emptyCardDescription, emptyCardTitle } from "./EmptyCard.variants";
import { cn } from "@/lib/utils";

export const EmptyCard = () => {
  return (
    <PromoCardContainer addBorder>
      <div className={cn(emptyCardContentContainer)}>
        <CardTitle className={cn(emptyCardTitle)}>Empty Card</CardTitle>
        <CardDescription className={cn(emptyCardDescription)}>This is an empty card.</CardDescription>
      </div>
    </PromoCardContainer>
  )
}