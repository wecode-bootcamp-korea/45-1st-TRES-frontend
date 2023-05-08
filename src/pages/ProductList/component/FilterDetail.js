import React, { useState } from 'react';
import './FilterDetail.scss';

const FilterDetail = ({ name, option }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="filter-detail">
      <div className="filter-header">
        <p className="filter-name">{name}</p>
        <img
          className="sort-img"
          alt="더보기"
          src={`images/icon/${
            isChecked ? 'angle-up-solid' : 'angle-down-solid'
          }.svg`}
          onClick={() => setIsChecked(prev => !prev)}
        />
      </div>
      {isChecked &&
        (option.length ? (
          option.map(item => (
            <div className="filter-check" key={item.id}>
              <input
                className="filter-input"
                type="checkbox"
                id={item.type}
                name={item.type}
              />
              <label className="filter-label" htmlFor={item.type} />
              <label className="label-name" htmlFor={item.type}>
                {item.content}
              </label>
            </div>
          ))
        ) : (
          <div className="filter-check">
            <input
              className="filter-range"
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="3"
            />
            <label htmlFor="volume" />
          </div>
        ))}
    </div>
  );
};

export default FilterDetail;
