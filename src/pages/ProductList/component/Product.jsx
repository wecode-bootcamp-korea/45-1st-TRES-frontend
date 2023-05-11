import React from 'react';
import './Product.scss';
import { useNavigate } from 'react-router-dom';

const Product = ({ product: { id, food, eng_food, price, food_image } }) => {
  const navigate = useNavigate();
  return (
    <div className="product" onClick={() => navigate(`/products/${id}`)}>
      <img className="food-img" alt="음식 사진" src={food_image} />
      <p className="korean-name">{food}</p>
      <p className="english-name">{eng_food}</p>
      <p>
        <span>{Math.floor(price).toLocaleString()}</span>원
      </p>
    </div>
  );
};

export default Product;
