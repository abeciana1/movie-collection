import { AddCard } from "@/components/movie/PromoCard/AddCard";
import { EmptyCard } from "@/components/movie/PromoCard/EmptyCard";

const HomePage = () => {
  return (
    <>
      <section className="flex gap-6 pr-4 md:pr-5">
        <AddCard />
        <EmptyCard />
      </section>
    </>
  )
}

export default HomePage