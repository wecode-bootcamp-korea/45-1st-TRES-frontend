import React from 'react';
import './Search.scss';

const Search = () => {
  return (
    <div className="search">
      <button className="search-icon-container">
        <img src="/images/icon/search.svg" alt="검색" className="search-icon" />
      </button>
      <input type="text" placeholder="검색" className="nav-search-input" />
    </div>
  );
};

export default Search;
