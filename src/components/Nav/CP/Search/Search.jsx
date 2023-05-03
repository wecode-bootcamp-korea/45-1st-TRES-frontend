import React from 'react';
import './Search.scss';

const Search = () => {
  return (
    <div className="search">
      <button className="nav-search-icon" />
      <input type="text" placeholder="검색" className="nav-search-input" />
    </div>
  );
};

export default Search;
