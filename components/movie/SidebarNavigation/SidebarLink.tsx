import Link from "next/link";
import { sidebarLinkVariants } from "./SidebarLink.variants";
import { cn } from "@/lib/utils";

export interface SidebarLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export const SidebarLink = ({ href, label, icon }: SidebarLinkProps) => {
  return (
    <li>
      <Link href={href} className={cn(sidebarLinkVariants())}>
        {icon}
        {label}
      </Link>
    </li>
  );
};
