import { GenreSection } from "@/components/movie/Sections/GenreSection";
import { Skeleton } from "@/components/ui/skeleton"

export default function HomeFullWidthLoading() {
  return (
    <>
      <GenreSection />
      <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <Skeleton className="aspect-[3/2] w-full" />
        <Skeleton className="aspect-[3/2] w-full" />
      </section>
    </>
  );
}
