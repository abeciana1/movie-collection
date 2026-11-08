import { type SidebarLinkProps, SidebarLink } from "./SidebarLink";
import { House, Bookmark, Database, LayoutGrid } from "lucide-react";

const sidebarLinks: SidebarLinkProps[] = [
  {
    href: "/home",
    label: "Home",
    icon: <House size={32} />
  },
  {
    href: "/watchlist",
    label: "Watchlist",
    icon: <Bookmark size={32} />
  },
  {
    href: "/collection",
    label: "Collection",
    icon: <Database size={32} />
  },
  {
    href: "/browse",
    label: "Browse",
    icon: <LayoutGrid size={32} />
  }
]

export const SidebarNavigation = () => {
  return (
    <nav>
      <ul>
        {sidebarLinks.map((link) => (
          <SidebarLink key={link.href} {...link} />
        ))}
      </ul>
    </nav>
  );
};