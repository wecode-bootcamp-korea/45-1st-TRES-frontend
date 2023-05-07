import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Monthly.scss';

const Monthly = () => {
  const [monthly, setMonthly] = useState([]);

  useEffect(() => {
    fetch('/data/main-best-list.json', {})
      .then(res => res.json())
      .then(data => {
        setMonthly(data);
      });
  }, []);

  if (!monthly) return;

  return (
    <div className="monthly">
      <div className="monthly-container">
        <h2 className="monthly-title">월간 베스트</h2>

        <ul className="monthly-list">
          {monthly.map(({ id, country, food, price, food_images }) => {
            return (
              <li key={id} className="monthly-item">
                <Link className="monthly-link" to="/#">
                  <img src={food_images} alt={food} className="food-img" />
                  <div className="food-info">
                    <p className="food-name">{food}</p>
                    <p className="food-country">{country}</p>
                    <p className="price">{price}원</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <button type="button" className="prev btn" />
        <button type="botton" className="next btn" />
      </div>
    </div>
  );
};

export default Monthly;
