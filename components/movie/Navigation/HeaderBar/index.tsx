import { Logo } from "@/components/movie/Navigation/Logo";
import {
  headerBarVariants,
  headerBarAccountMenu,
  headerBarContentContainer,
} from "./HeaderBar.variants";
import { AddItemMenu } from "@/components/movie/Navigation/AddItemMenu";
import { AccountMenu } from "@/components/movie/Navigation/AccountMenu";
import { SearchForm } from "@/components/movie/Forms/SearchForm";

const HeaderBar = () => {
  return (
    <header className={headerBarVariants}>
      <div className={headerBarContentContainer}>
        <Logo />
        <div className="hidden sm:block">
          <SearchForm />
        </div>
        <div className={headerBarAccountMenu}>
          <AddItemMenu />
          <AccountMenu />
        </div>
      </div>
      <div className="sm:hidden">
        <SearchForm />
      </div>
    </header>
  );
};

export default HeaderBar;
