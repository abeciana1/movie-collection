import type { JSX } from "react";
import { SectionWrapper } from "@/components/movie/Sections/SectionWrapper";

export const MyWatchlistsCard = (): JSX.Element => {
  return (
    <SectionWrapper
      title="My Watchlists"
      ctaLabel="View all"
      ctaLink="/watchlists"
      ctaShowArrow
    >
      <></>
    </SectionWrapper>
  )
}