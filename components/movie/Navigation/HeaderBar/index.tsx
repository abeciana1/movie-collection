import { Logo } from "@/components/movie/Navigation/Logo";
import { Button } from "@/components/ui/Button";
import { Plus } from 'lucide-react';

const HeaderBar = () => {
  return (
    <header>
      <Logo />
      <Button className="rounded-full px-4 py-2 font-medium text-lg">
        <Plus className="size-6" />
        Add Item
      </Button>
    </header>
  );
};

export default HeaderBar;
