import React from 'react';
import { Link } from 'react-router-dom';
import './NewProduct.scss';

const NewProduct = ({ mainPage }) => {
  return (
    <div className="new-product">
      <div className="new-container">
        <h2 className="new-title">새로 나왔어요</h2>
        <ul className="new-list">
          {mainPage &&
            mainPage.map(({ id, country, food, price, food_images }) => {
              return (
                <li key={id} className="new-item">
                  <Link className="new-link" to={`/products/${id}`}>
                    <img src={food_images} alt={food} className="food-img" />
                    <p className="food-name">{food}</p>
                    <p className="food-country">{country}</p>
                    <p className="price">
                      {Math.floor(price).toLocaleString()}원
                    </p>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default NewProduct;
