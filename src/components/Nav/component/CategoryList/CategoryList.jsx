import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.scss';

const CategoryList = () => {
  const [display, setDisplay] = useState(false);
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    fetch('/data/main-continent-data.json')
      .then(res => res.json())
      .then(data => {
        setSubCategory(data);
      });
  }, []);

  const enterMouse = () => {
    setDisplay(true);
  };
  const leaveMouse = () => {
    setDisplay(false);
  };

  return (
    <div className="category-box">
      <ul className="category-list" onMouseEnter={enterMouse}>
        {CATEGORY_DATA.map(({ id, name, engName }) => {
          return (
            <li key={id} className="category-item">
              {engName}
            </li>
          );
        })}
      </ul>
      {display && (
        <div className="sub-category" onMouseLeave={leaveMouse}>
          <div className="sub-category-box">
            {subCategory.map(({ id, name, engName }) => {
              return (
                <Link className="sub-category-link" key={id} to={`/${id}`}>
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryList;

const CATEGORY_DATA = [
  {
    id: 1,
    name: '아프리카',
    engName: 'Africa',
  },
  {
    id: 2,
    name: '아메리카',
    engName: 'America',
  },
  {
    id: 3,
    name: '아시아',
    engName: 'Asia',
  },
  {
    id: 4,
    name: '유럽',
    engName: 'Europe',
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
