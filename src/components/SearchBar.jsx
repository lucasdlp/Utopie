import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <label htmlFor="input_search">
        <img src="assets/svg/search.svg" alt="search" />
      </label>
      <input
        className="bg-secondary text-white w-[40vw] h-14 px-4 border border-white rounded  "
        type="search"
        autoComplete="off"
        placeholder="Rechercher un jeu"
        id="input_search"
      />
    </div>
  );
};

export default SearchBar;
