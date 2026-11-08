import Link from "next/link";

export interface SidebarLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export const SidebarLink = ({ href, label, icon }: SidebarLinkProps) => {
  return (
    <Link href={href}>
      {icon}
      {label}
    </Link>
  );
};
