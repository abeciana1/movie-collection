import { Logo } from "@/components/movie/Navigation/Logo";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import { headerBarVariants } from "./HeaderBar.variants";
import { AccountMenu } from "@/components/movie/Navigation/AccountMenu";
import { headerBarAccountMenu, headerBarAddItemButton } from "./HeaderBar.variants";

const HeaderBar = () => {
  return (
    <header className={headerBarVariants}>
      <Logo />
      <div className={headerBarAccountMenu}>
        <Button className={headerBarAddItemButton}>
          <Plus className="size-6" />
          <span className="hidden md:inline">Add Item</span>
        </Button>
        <AccountMenu />
      </div>
    </header>
  );
};

export default HeaderBar;
