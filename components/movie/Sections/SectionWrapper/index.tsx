import type { JSX, ReactNode } from "react";

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
}: SectionWrapperProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={ctaLink}>
        {ctaLabel}
        {ctaShowArrow && <span> →</span>}
      </a>
      {children}
    </section>
  );
};
