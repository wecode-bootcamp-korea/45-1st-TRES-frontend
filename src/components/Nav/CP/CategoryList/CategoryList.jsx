import React from 'react';
import './CategoryList.scss';

const CategoryList = () => {
  return (
    <ul className="category-list">
      {CATEGORY_DATA.map(info => {
        const { id, name, engName } = info;
        return (
          <li key={id} className="category-item">
            {engName}
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;

const CATEGORY_DATA = [
  {
    id: 1,
    name: '아시아',
    engName: 'Asia',
  },
  {
    id: 2,
    name: '유럽',
    engName: 'Europe',
  },
  {
    id: 3,
    name: '아메리카',
    engName: 'America',
  },
  {
    id: 4,
    name: '아프리카',
    engName: 'Africa',
  },
  {
    id: 5,
    name: '오세아니아',
    engName: 'Oceania',
  },
  {
    id: 6,
    name: '이벤트',
    engName: 'Event',
  },
];
