import { Logo } from "@/components/movie/Navigation/Logo";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import { headerBarVariants } from "./HeaderBar.variants";

const HeaderBar = () => {
  return (
    <header className={headerBarVariants}>
      <Logo />
      <div>
        <Button className="rounded-full px-4 py-2 font-medium text-lg">
          <Plus className="size-6" />
          Add Item
        </Button>
      </div>
    </header>
  );
};

export default HeaderBar;
