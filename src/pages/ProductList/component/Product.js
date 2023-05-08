import React from 'react';
import './Product.scss';

const Product = ({ product: { food, eng_food, price, likes_count } }) => {
  return (
    <div className="product">
      <img
        className="food-img"
        alt="음식 사진"
        src="https://images.unsplash.com/photo-1633436375795-12b3b339712f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      />
      <p className="korean-name">{food}</p>
      <p className="english-name">{eng_food}</p>
      <p>
        <span>{price}</span>원
      </p>
    </div>
  );
};

export default Product;
