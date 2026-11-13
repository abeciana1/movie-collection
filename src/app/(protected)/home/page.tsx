import { AddCard } from "@/components/movie/PromoCard/AddCard";
import { EmptyCard } from "@/components/movie/PromoCard/EmptyCard";
import { getCollection } from "@/lib/queries/getCollection";
import { getServerSession } from "@/lib/auth/getServerSession";


const HomePage = async () => {
  const session = await getServerSession();
  const userId = session?.user?.id;
  const collection = await getCollection(userId!);

  console.log({ collection });
  return (
    <>
      <section className="flex gap-6 pr-4 md:pr-5">
        <AddCard />
        {collection && collection.length < 1 && <EmptyCard />}
        {collection && collection.length > 0 && <EmptyCard />}
      </section>
    </>
  )
}

export default HomePage