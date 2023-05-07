import React from 'react';
import ProductCalculation from './component/ProductCalculation';
import ProductImformation from './component/ProductImformation';
import ProductSummary from './component/ProductSummary';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <img
          className="product-detail-img"
          src="./images/productDetail/sample.png"
          alt="음식사진입니다."
        />
        <section className="product-detail-summary">
          <div className="product-region">한국 / 아시아</div>
          <h1 className="font-layout kor-name">땅콩소스로 숙성된 돼지갈비</h1>
          <h1 className="font-layout eng-name">
            Pork ribs marinated in peanut sauce
          </h1>
          <div className="font-layout product-price">32,000원</div>
          <ProductSummary />
          <div className="product-choice">
            <span>상품선택</span>
            <span className="product-calculation-box">
              <div className="product-choice-title">
                땅콩소스로 숙성된 돼지갈비
              </div>
              <ProductCalculation />
            </span>
          </div>
          <div className="product-total-price">
            <span>총 상품금액: </span>
            <span className="total-price-number">12,000원</span>
          </div>
          <div className="button-box">
            <img
              className="recommand-button"
              src="./images/icon/heart.svg"
              alt="비어있는 하트 사진입니다.."
            />
            <button className="cart-add-button">장바구니 담기</button>
          </div>
        </section>
      </div>
      <ProductImformation />
    </div>
  );
};

export default ProductDetail;
