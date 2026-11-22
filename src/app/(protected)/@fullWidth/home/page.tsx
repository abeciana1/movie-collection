import { GenreSection } from "@/components/movie/Sections/GenreSection"
import { getWatchlists } from "@/lib/queries/getWatchlists"
import { MyWatchlistsCard } from "@/components/movie/PromoCard/MyWatchlists";
import { EmptyWatchlistCard } from "@/components/movie/PromoCard/MyWatchlists/EmptyWatchlistCard";

const HomePageFullWidth = async () => {
  const watchlists = await getWatchlists();
  return (
    <>
      <GenreSection />
      <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {watchlists && watchlists.length < 1 && <EmptyWatchlistCard />}
      </section>
    </>
  )
}

export default HomePageFullWidth