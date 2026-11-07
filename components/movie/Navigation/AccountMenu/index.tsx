import { Profile } from "@/components/movie/Navigation/Profile";
import { accountMenuTrigger } from "./AccountMenu.variants";
import { Suspense } from "react";
import { ProfilePlaceholder } from "@/components/movie/Navigation/Profile/Profile.placeholder";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const accountMenuItems = [{ label: "Settings", href: "/settings" }];

export const AccountMenu = () => {
  return (
    <Suspense fallback={<ProfilePlaceholder />}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={accountMenuTrigger}>
              <Profile />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {accountMenuItems.map((item) => (
                <NavigationMenuLink render={<Link href={item.href} />} key={item.href} href={item.href}>
                  {item.label}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </Suspense>
  );
};
