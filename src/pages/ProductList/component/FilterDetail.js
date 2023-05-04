import React, { useState } from 'react';
import './FilterDetail.scss';

const FilterDetail = ({ name, check }) => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div className="filter-detail">
      <div className="filter-header">
        <p className="filter-name">{name}</p>
        {isCheck ? (
          <img
            className="sort-img"
            alt="더보기"
            src="images/icon/angle-up-solid.svg"
            onClick={() => setIsCheck(prev => !prev)}
          />
        ) : (
          <img
            className="sort-img"
            alt="더보기"
            src="images/icon/angle-down-solid.svg"
            onClick={() => setIsCheck(prev => !prev)}
          />
        )}
      </div>
      {isCheck
        ? check.map(item => (
            <div className="filter-check" key={item.id}>
              <input
                className="filter-input"
                type="checkbox"
                id={item.type}
                name={item.type}
              />
              <label className="filter-label" for={item.type} />
              <label className="label-name" for={item.type}>
                {item.content}
              </label>
            </div>
          ))
        : null}
    </div>
  );
};

export default FilterDetail;
