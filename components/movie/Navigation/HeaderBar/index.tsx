import { Logo } from "@/components/movie/Navigation/Logo";
import { headerBarVariants } from "./HeaderBar.variants";
import { headerBarAccountMenu } from "./HeaderBar.variants";
import { AddItemMenu } from "@/components/movie/Navigation/AddItemMenu";
import { AccountMenu } from "@/components/movie/Navigation/AccountMenu";
import { SearchForm } from "@/components/movie/Forms/SearchForm";

const HeaderBar = () => {
  return (
    <header className={headerBarVariants}>
      <Logo />
      <SearchForm />
      <div className={headerBarAccountMenu}>
        <AddItemMenu />
        <AccountMenu />
      </div>
    </header>
  );
};

export default HeaderBar;
