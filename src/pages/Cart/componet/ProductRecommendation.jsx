import React from 'react';
import './ProductRecommendation.scss';

const ProductRecommendation = () => {
  return (
    <li className="product-recommendation">
      <img
        className="product-recommendation-img"
        src="/images/cart/sample.png"
        alt="이미지가 없습니다."
      />
      <div className="product-recommendation-name">인도의 인도카레</div>
      <div className="product-recommendation-name-eng">curry of india</div>
      <div className="product-recommendation-price">12,000원</div>
    </li>
  );
};

export default ProductRecommendation;
