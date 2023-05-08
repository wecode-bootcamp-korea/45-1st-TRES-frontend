import React from 'react';
import './ProductCalculation.scss';

const ProductCalculation = () => {
  return (
    <div className="product-calculation">
      <div className="product-count">
        <button className="count">-</button>
        <span className="quantity">1</span>
        <button className="count">+</button>
      </div>
      <div className="product-calculation-tatal-price">32,000원</div>
    </div>
  );
};

export default ProductCalculation;
