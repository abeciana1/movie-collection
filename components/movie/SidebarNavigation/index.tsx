import type { SidebarLinkProps } from "./SidebarLink";
import { House, Bookmark, Database, LayoutGrid } from "lucide-react";

const sidebarLinks: SidebarLinkProps[] = [
  {
    href: "/home",
    label: "Home",
    icon: <House />
  },
  {
    href: "/watchlist",
    label: "Watchlist",
    icon: <Bookmark />
  },
  {
    href: "/collection",
    label: "Collection",
    icon: <Database />
  },
  {
    href: "/browse",
    label: "Browse",
    icon: <LayoutGrid />
  }
]

export const SidebarNavigation = () => {
  return (
    <nav>
      <ul></ul>
    </nav>
  );
};