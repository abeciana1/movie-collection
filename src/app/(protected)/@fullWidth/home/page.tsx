import { GenreSection } from "@/components/movie/Sections/GenreSection"
import { getWatchlists } from "@/lib/queries/getWatchlists"
import { MyWatchlistsCard } from "@/components/movie/PromoCard/MyWatchlists";

const HomePageFullWidth = async () => {
  const watchlists = await getWatchlists();
  return (
    <>
      <GenreSection />
      <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {watchlists && <MyWatchlistsCard empty={watchlists.length < 1} />}
      </section>
    </>
  )
}

export default HomePageFullWidth