import { GenreSection } from "@/components/movie/Sections/GenreSection";
import { getWatchlists } from "@/lib/queries/getWatchlists";
import { MyWatchlistsCard } from "@/components/movie/PromoCard/MyWatchlists";
import { EmptyWatchlistCard } from "@/components/movie/PromoCard/MyWatchlists/EmptyWatchlistCard";
import { getCollection } from "@/lib/queries/getCollection";
import { EmptyCard } from "@/components/movie/PromoCard/EmptyCard";

const HomePageFullWidth = async () => {
  const [watchlists, collection] = await Promise.all([
    getWatchlists(),
    getCollection(),
  ]);
  return (
    <>
      <GenreSection />
      <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {watchlists && watchlists.length < 1 && <EmptyWatchlistCard />}
        {watchlists && watchlists.length > 0 && <MyWatchlistsCard />}
        {collection && collection.length < 1 && <EmptyCard />}
        {collection && collection.length > 0 && <EmptyCard />}
      </section>
    </>
  );
};

export default HomePageFullWidth;
