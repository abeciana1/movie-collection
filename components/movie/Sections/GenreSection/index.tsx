import ActionImg from "@/public/action.webp"
import AdventureImg from "@/public/adventure.webp"
import AnimationImg from "@/public/animation.webp"
import ComedyImg from "@/public/comedy.webp"
import DocumentaryImg from "@/public/documentary.webp"
import DramaImg from "@/public/drama.webp"
import FantasyImg from "@/public/fantasy.webp"
import HorrorImg from "@/public/horror.webp"
import SciFiImg from "@/public/scifi.webp"
import ThrillerImg from "@/public/thriller.webp"
import FamilyImg from "@/public/family.webp"
import RomanceImg from "@/public/romance.webp"
import MysteryImg from "@/public/mystery.webp"
import WesternImg from "@/public/western.webp"
import WarImg from "@/public/war.webp"
import MusicImg from "@/public/music.webp"
import MusicalImg from "@/public/musical.webp"
import HistoryImg from "@/public/history.webp"
import CrimeImg from "@/public/crime.webp"
import BiographyImg from "@/public/biography.webp"
import SportImg from "@/public/sports.webp"
import { GenreCard } from "./GenreCard"
import { genreSection } from "./GenreSection.variants"

const genreImages = [
  { name: "Action", image: ActionImg },
  { name: "Adventure", image: AdventureImg },
  { name: "Animation", image: AnimationImg },
  { name: "Comedy", image: ComedyImg },
  { name: "Documentary", image: DocumentaryImg },
  { name: "Drama", image: DramaImg },
  { name: "Fantasy", image: FantasyImg },
  { name: "Horror", image: HorrorImg },
  { name: "Sci-Fi", image: SciFiImg },
  { name: "Thriller", image: ThrillerImg },
  { name: "Family", image: FamilyImg },
  { name: "Romance", image: RomanceImg },
  { name: "Mystery", image: MysteryImg },
  { name: "Western", image: WesternImg },
  { name: "War", image: WarImg },
  { name: "Music", image: MusicImg },
  { name: "Musical", image: MusicalImg },
  { name: "History", image: HistoryImg },
  { name: "Crime", image: CrimeImg },
  { name: "Biography", image: BiographyImg },
  { name: "Sport", image: SportImg }
]

export const GenreSection = () => {
  return (
    <section className={genreSection}>
      {genreImages.map(({ name, image }) => {
        console.log({ image })
        return (
          <GenreCard key={name} name={name} image={image} />
        )
      })}
    </section>
  )
}