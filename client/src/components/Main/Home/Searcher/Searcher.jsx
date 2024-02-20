import React, { useEffect } from "react";
import { useDebounce } from "use-debounce";


const Searcher = ({ searchText, setSearchText, onSearch, goBack, back }) => {
  
  
  

  const handleInputChange = (e) => {
    setSearchText(e.target.value)
  };


  return (
    <form id="searcher">
      <label htmlFor="search">Search for a fruit:</label>
      <input
      id="search"
        className="searcher"
        type="text"
        value={searchText}
        onChange={handleInputChange}
      />
      <button id="go" type="submit" onClick={onSearch}>Go</button>
      {back &&  <button id="back" onClick={goBack}>Back</button> }
    </form>
  );
};

export default Searcher;
