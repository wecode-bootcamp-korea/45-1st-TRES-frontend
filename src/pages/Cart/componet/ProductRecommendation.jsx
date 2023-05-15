import React from 'react';
import './ProductRecommendation.scss';

const ProductRecommendation = ({ title, titleEng, price, foodImg }) => {
  return (
    <li className="product-recommendation">
      <img
        className="product-recommendation-img"
        src={foodImg}
        alt="추천상품을 나타내는 이미지."
      />
      <div className="recommendation-info">{title}</div>
      <div className="recommendation-info">{titleEng}</div>
      <div className="recommendation-info">{price.toLocaleString()}원</div>
    </li>
  );
};

export default ProductRecommendation;
