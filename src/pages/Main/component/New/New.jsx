import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './New.scss';

const New = () => {
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    fetch('/data/main-new-list.json', {})
      .then(res => res.json())
      .then(data => {
        setNewList(data);
      });
  }, []);

  return (
    <div className="new">
      <div className="new-container">
        <h2 className="new-title">새로 나왔어요</h2>
        <ul className="new-list">
          {newList.map(({ id, country, food, price, food_images }) => {
            return (
              <li key={id} className="new-item">
                <Link className="new-link" to="/#">
                  <img src={food_images} alt={food} className="food-img" />
                  <p className="food-name">{food}</p>
                  <p className="food-country">{country}</p>
                  <p className="price">{price}원</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default New;
