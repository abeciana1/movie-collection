import { Logo } from "@/components/movie/Navigation/Logo";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import { headerBarVariants } from "./HeaderBar.variants";
import { AccountMenu } from "@/components/movie/Navigation/AccountMenu";

const HeaderBar = () => {
  return (
    <header className={headerBarVariants}>
      <Logo />
      <div>
        <Button className="rounded-full px-4 py-2 font-medium text-lg">
          <Plus className="size-6" />
          Add Item
        </Button>
        <AccountMenu />
      </div>
    </header>
  );
};

export default HeaderBar;
