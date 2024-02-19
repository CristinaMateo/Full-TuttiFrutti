import React, { useEffect } from "react";
import { useDebounce } from "use-debounce";


const Searcher = ({ searchText, setSearchText, onSearch }) => {
  

  const handleInputChange = (e) => {
    setSearchText(e.target.value)
  };

  useEffect(() => {
    // Esta función se ejecutará después de que setSearchText haya completado la actualización del estado
    console.log(searchText);
  }, [searchText]);

  return (
    <form id="searcher">
      <label htmlFor="search">Search for a fruit:</label>
      <input
        className="searcher"
        type="text"
        value={searchText}
        onChange={handleInputChange}
      />
      <button id="go" type="submit" onClick={onSearch}>Go</button>
    </form>
  );
};

export default Searcher;
