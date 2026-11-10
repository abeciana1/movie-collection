import { PromoCardContainer } from "@/components/movie/PromoCard/Container";
import { CardTitle, CardDescription } from "@/components/ui/Card";
import { emptyCardContentContainer, emptyCardDescription, emptyCardTitle } from "./EmptyCard.variants";
import { cn } from "@/lib/utils";
import { Film } from "lucide-react";

export const EmptyCard = () => {
  return (
    <PromoCardContainer addBorder>
      <div className={cn(emptyCardContentContainer)}>
        <Film size={48} />
        <CardTitle className={cn(emptyCardTitle)}>Build your collection.</CardTitle>
        <CardDescription className={cn(emptyCardDescription)}>Your collection is empty.</CardDescription>
      </div>
    </PromoCardContainer>
  )
}