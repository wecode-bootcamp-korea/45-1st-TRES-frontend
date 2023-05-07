import React from 'react';
import './ProductRecommendation.scss';

const ProductRecommendation = ({ index, currentSlide }) => {
  return (
    <li className="product-recommendation">
      <img
        className="product-recommendation-img"
        src="/images/cart/sample.png"
        alt="추천상품을 나타내는 이미지."
      />
      <div className="recommendation-info">인도의 인도카레</div>
      <div className="recommendation-info">curry of india</div>
      <div className="recommendation-info">12,000원</div>
    </li>
  );
};

export default ProductRecommendation;
