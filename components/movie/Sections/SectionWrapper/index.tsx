import type { JSX, ReactNode } from "react";
import {
  sectionWrapperDescription,
  sectionWrapperTitle,
  sectionWrapperLink,
  sectionWrapperHeaderContainer
} from "./SectionWrapper.variants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
  ctaShowArrow = false,
}: SectionWrapperProps): JSX.Element => {
  return (
    <section className="py-6">
      <div className={sectionWrapperHeaderContainer}>
        <h2 className={sectionWrapperTitle}>{title}</h2>
        <Link href={ctaLink} className={sectionWrapperLink}>
          {ctaLabel}
          {ctaShowArrow && <ArrowRight size={16} />}
        </Link>
      </div>
      <p className={sectionWrapperDescription({ description: !!description })}>{description}</p>
      {children}
    </section>
  );
};
