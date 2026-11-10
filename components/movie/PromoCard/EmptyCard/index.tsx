import { PromoCardContainer } from "@/components/movie/PromoCard/Container";
import { CardTitle, CardDescription } from "@/components/ui/Card";

export const EmptyCard = () => {
  return (
    <PromoCardContainer>
      <CardTitle>Empty Card</CardTitle>
      <CardDescription>This is an empty card.</CardDescription>
    </PromoCardContainer>
  )
}