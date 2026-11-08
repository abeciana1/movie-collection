"use client";
import Link from "next/link";
import { sidebarLinkVariants } from "./SidebarLink.variants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export interface SidebarLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  showArrow?: boolean;
}

export const SidebarLink = ({
  href,
  label,
  icon,
  showArrow = false,
}: SidebarLinkProps) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={cn(sidebarLinkVariants({ active: pathname === href }))}
      >
        {icon}
        {label}
        {showArrow && <ChevronRight />}
      </Link>
    </li>
  );
};
