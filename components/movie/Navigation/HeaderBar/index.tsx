import { Logo } from "@/components/movie/Navigation/Logo";
import { headerBarVariants } from "./HeaderBar.variants";
import { headerBarAccountMenu } from "./HeaderBar.variants";
import { AddItemMenu } from "@/components/movie/Navigation/AddItemMenu";

const HeaderBar = () => {
  return (
    <header className={headerBarVariants}>
      <Logo />
      <div className={headerBarAccountMenu}>
        <AddItemMenu />
      </div>
    </header>
  );
};

export default HeaderBar;
