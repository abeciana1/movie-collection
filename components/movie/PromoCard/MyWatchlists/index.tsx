import type { JSX } from "react";
import { SectionWrapper } from "@/components/movie/Sections/SectionWrapper";

interface MyWatchlistsCardProps {
  empty: boolean;
}

export const MyWatchlistsCard = ({ empty }: MyWatchlistsCardProps): JSX.Element => {
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