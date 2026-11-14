import { AddCard } from "@/components/movie/PromoCard/AddCard";
import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoading() {
  return (
    <section className="flex gap-6 pr-4 md:pr-5">
      <AddCard />
      <Skeleton className="w-118.5 h-96" />
    </section>
  );
}
