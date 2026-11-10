import { AddCard } from "@/components/movie/PromoCard/AddCard";

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <section className="flex gap-6">
        <AddCard />
        <AddCard />
      </section>
    </>
  )
}

export default HomePage