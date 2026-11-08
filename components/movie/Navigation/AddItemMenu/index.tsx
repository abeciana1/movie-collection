import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import { headerBarAddItemButton } from "@/components/movie/Navigation/HeaderBar/HeaderBar.variants";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const addItemMenu = [
  { label: "Add Movie/TV", href: "/add/movie" },
  { label: "Scan barcode", href: "/add/scan" },
]

export const AddItemMenu = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="flex items-center">
            <NavigationMenuTrigger
              render={<Button />}
              className={headerBarAddItemButton}
              aria-label="Add Item"
            >
              <Plus className="size-6" />
              <span className="hidden md:inline">Add Item</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {addItemMenu.map((item) => (
                <NavigationMenuLink render={<Link href={item.href} />} key={item.href} href={item.href}>
                  {item.label}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
