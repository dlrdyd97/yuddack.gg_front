import React, { useState } from "react";
import "../../styles/components/searchBar/SearchBar.css";
import searchIcon from "../../styles/images/searchButton.png";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="검색어를 입력하세요"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <a href="#" className="search-button" onClick={handleSearch}>
        <img src={searchIcon} alt="" className="search-icon" />
      </a>
    </div>
  );
}

export default SearchBar;
