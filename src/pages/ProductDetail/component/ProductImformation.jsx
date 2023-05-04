import React from 'react';
import './ProductImformation.scss';

const ProductImformation = () => {
  return (
    <div className="product-information">
      <div className="description-button-box">
        <button className="description-button">상품설명</button>
        <button className="description-button">상세정보</button>
        <button className="description-button">후기(2,312)</button>
      </div>
      <img
        className="description-img"
        src="./images/productDetail/description.png"
        alt="상품설명, 상세정보, 후기를 나타내는 사진입니다."
      />
    </div>
  );
};

export default ProductImformation;
