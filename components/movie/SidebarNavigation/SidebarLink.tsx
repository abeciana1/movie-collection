"use client"
import Link from "next/link";
import { sidebarLinkVariants } from "./SidebarLink.variants";
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation'

export interface SidebarLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export const SidebarLink = ({ href, label, icon }: SidebarLinkProps) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <li>
      <Link href={href} className={cn(sidebarLinkVariants({ active: pathname === href}))}>
        {icon}
        {label}
      </Link>
    </li>
  );
};
