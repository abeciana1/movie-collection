import { AccountMenu } from "@/components/movie/Navigation/AccountMenu";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import { headerBarAddItemButton } from "@/components/movie/Navigation/HeaderBar/HeaderBar.variants";

export const AddItemMenu = () => {
  return (
    <>
      <Button className={headerBarAddItemButton}>
        <Plus className="size-6" />
        <span className="hidden md:inline">Add Item</span>
      </Button>
      <AccountMenu />
    </>
  );
}