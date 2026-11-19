import type { JSX, ReactNode } from "react";
import { sectionWrapperDescription, sectionWrapperTitle } from "./SectionWrapper.variants";
import { ArrowRight } from "lucide-react";

interface SectionWrapperProps {
  children: ReactNode | ReactNode[];
  title: string;
  description: string;
  ctaLabel: string;
  ctaLink: string;
  ctaShowArrow?: boolean;
}

export const SectionWrapper = ({
  children,
  title,
  description,
  ctaLabel,
  ctaLink,
  ctaShowArrow,
}: SectionWrapperProps): JSX.Element => {
  return (
    <section>
      <h2 className={sectionWrapperTitle}>{title}</h2>
      <p className={sectionWrapperDescription}>{description}</p>
      <a href={ctaLink} className="">
        {ctaLabel}
        {ctaShowArrow && <ArrowRight size={16} />}
      </a>
      {children}
    </section>
  );
};
