import React from 'react';
import './Product.scss';

const Product = () => {
  return (
    <div className="product">
      <img
        className="food-img"
        alt="음식 사진"
        src="https://images.unsplash.com/photo-1633436375795-12b3b339712f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      />
      <p className="korean-name">음식 이름</p>
      <p className="english-name">food name</p>
      <p>
        <span>20000</span>원
      </p>
    </div>
  );
};

export default Product;
