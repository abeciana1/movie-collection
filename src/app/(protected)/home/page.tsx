import { AddCard } from "@/components/movie/PromoCard/AddCard";

const HomePage = () => {
  return (
    <>
      <section className="flex gap-6">
        <AddCard />
        <AddCard />
      </section>
    </>
  )
}

export default HomePage