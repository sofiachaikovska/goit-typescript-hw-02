import css from "./SearchBar.module.css";
import { FC } from "react";
import { Toaster, toast } from "react-hot-toast";
import { SearchBarProps } from "./SearchBar.types";

const SearchBar: FC<SearchBarProps> = ({ onSetSearchQuery }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchInput = (event.target as HTMLFormElement).elements.namedItem(
      "search"
    ) as HTMLInputElement;
    const searchTerm = searchInput?.value.trim();
    if (!searchTerm) {
      toast.error("Enter text to search for images!");
      return;
    }
    onSetSearchQuery(searchTerm);
  };

  return (
    <header className={css.header}>
      <Toaster />
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button className={css.searchBtn} type="submit">
          🔍
        </button>
        <input
          className={css.headerInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
      </form>
    </header>
  );
};

export default SearchBar;
