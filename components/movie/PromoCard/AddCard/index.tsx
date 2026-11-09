import { PromoCardContainer } from "@/components/movie/PromoCard/Container";
import ProjectorImage from "@/public/project-image.jpg"

export const AddCard = () => {
  return (
    <PromoCardContainer backgroundImage={ProjectorImage.src} backgroundAltText="Projector in black background">
      <span>Add Card</span>
    </PromoCardContainer>
  )
}