import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const SearchBar = ({ showSearch }) => {
  const { searchText, setSearchText } = useContext(CartContext);

  // if(!showSearch) return;

  return (
    <input
      className={`tw-p-2 tw-transition-all ${
        showSearch ? "tw-block" : "tw-hidden"
      }`}
      type="text"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

export default SearchBar;
