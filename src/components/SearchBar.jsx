import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center p-10">
      <label
        htmlFor="input_search"
        className="bg-secondary h-14 w-8 border-l-2 border-t-2 border-b-2 border-[#ffffff30] rounded-l-lg flex items-center justify-center"
      >
        <img src="assets/svg/search.svg" alt="search" className="ml-2" />
      </label>
      <input
        className="bg-secondary text-white w-[40vw] h-14 px-4 border-y-2 border-r-2 border-[#ffffff30] rounded-r-lg outline-none "
        type="search"
        autoComplete="off"
        placeholder="Rechercher un jeu"
        id="input_search"
      />
    </div>
  );
};

export default SearchBar;
