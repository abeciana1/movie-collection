import Link from "next/link";

export interface SidebarLinkProps {
  href: string;
  label: string;
}

export const SidebarLink = ({ href, label }: SidebarLinkProps) => {
  return <Link href={href}>{label}</Link>;
};
