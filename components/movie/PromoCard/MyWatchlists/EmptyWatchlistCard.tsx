import { PromoCardContainer } from "@/components/movie/PromoCard/Container";
import { CardTitle, CardDescription } from "@/components/ui/Card";
import { emptyCardContentContainer, emptyCardDescription, emptyCardTitle } from "@/components/movie/PromoCard/EmptyCard/EmptyCard.variants"
import { cn } from "@/lib/utils";
import { List } from "lucide-react";

export const EmptyWatchlistCard = () => {
  return (
    <PromoCardContainer addBorder >
      <div className={cn(emptyCardContentContainer)}>
        <List size={48} />
        <CardTitle className={cn(emptyCardTitle)}>You have no watchlists.</CardTitle>
        <CardDescription className={cn(emptyCardDescription)}>{"You haven't created any watchlists yet."}</CardDescription>
      </div>
    </PromoCardContainer>
  )
}