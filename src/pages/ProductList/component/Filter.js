import React from 'react';
import './Filter.scss';
import FilterDetail from './FilterDetail';

const Filter = () => {
  return (
    <div className="filter">
      <ul className="country">
        {COUNTRY.map(({ id, name }) => (
          <li className="country-list" key={id}>
            <span>{name}</span>
          </li>
        ))}
      </ul>
      <FilterDetail name="채식" option={VEGE_OPTION} />
      <FilterDetail name="고기" option={MEAT_OPTION} />
      <FilterDetail name="알러지" option={ALLERGY_OPTION} />
      <FilterDetail name="맵기" />
    </div>
  );
};

export default Filter;

const VEGE_OPTION = [{ id: 0, type: 'vegetarian', content: '채식주의자' }];
const MEAT_OPTION = [
  { id: 0, type: 'cow', content: '소' },
  { id: 1, type: 'pig', content: '돼지' },
  { id: 2, type: 'sheep', content: '양' },
  { id: 3, type: 'chicken', content: '닭' },
];
const ALLERGY_OPTION = [
  { id: 0, type: 'milk', content: '우유' },
  { id: 1, type: 'peanut', content: '땅통' },
  { id: 2, type: 'egg', content: '계란' },
];
const COUNTRY = [
  { id: 0, name: '한국' },
  { id: 1, name: '중국' },
  { id: 2, name: '일본' },
];
