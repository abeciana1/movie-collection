import { AddCard } from "@/components/movie/PromoCard/AddCard";
import { EmptyCard } from "@/components/movie/PromoCard/EmptyCard";
import { getCollection } from "@/lib/queries/getCollection";
import { GenreSection } from "@/components/movie/Sections/GenreSection"

const HomePage = async () => {
  const collection = await getCollection();

  return (
    <>
      <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <AddCard />
        {collection && collection.length < 1 && <EmptyCard />}
        {collection && collection.length > 0 && <EmptyCard />}
      </section>
      <GenreSection />
    </>
  )
}

export default HomePage
