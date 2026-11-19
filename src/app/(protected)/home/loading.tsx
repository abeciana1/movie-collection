import { AddCard } from "@/components/movie/PromoCard/AddCard";
import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoading() {
  return (
    <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      <AddCard />
      <Skeleton className="aspect-[3/2] w-full" />
    </section>
  );
}
