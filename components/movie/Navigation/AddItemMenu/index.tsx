import { AccountMenu } from "@/components/movie/Navigation/AccountMenu";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

export const AddItemMenu = () => {
  return (
    <>
      <Button>
        <Plus className="size-6" />
        <span className="hidden md:inline">Add Item</span>
      </Button>
      <AccountMenu />
    </>
  );
}