import React from 'react';
import './Cart.scss';
import ProductInCart from './componet/ProductInCart';
import ProductRecommendation from './componet/ProductRecommendation';

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-container">
        <section className="shopping-basket">
          <h1 className="shopping-basket-title">장바구니</h1>
          <div>
            <input className="check-box" type="checkbox" />
            <label className="select-all">전체 선택</label>
            <button className="delete-button-select">삭제</button>
          </div>
          <ul>
            {[1, 2, 3, 4].map(item => (
              <ProductInCart key={item.index} />
            ))}
          </ul>
        </section>
        <section className="order-history">
          <h1 className="order-history-title">주문 내역</h1>
          <div className="order-price">
            <span>상품 금액</span>
            <span>100,000원</span>
          </div>
          <div className="delivery-price">
            <span>배송비</span>
            <span>3,000원</span>
          </div>
          <div className="total-price">
            <span>총 결제 금액</span>
            <span>103,000,000원</span>
          </div>
          <button className="order-button">주문결제</button>
        </section>
      </div>
      <section className="product-recommendation-list">
        <div className="product-recommendation-list-title-box">
          <h2 className="product-recommendation-list-title">추천상품</h2>
          <span>
            <img
              className="slide-left"
              src="/images/cart/angle-left-solid.svg"
              alt="이미지가 없습니다."
            />
            <img
              className="slide-right"
              src="/images/cart/angle-right-solid.svg"
              alt="이미지가 없습니다."
            />
          </span>
        </div>
        <ul className="product-in-recommendation">
          {[1, 2, 3, 4].map(item => (
            <ProductRecommendation key={item.index} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Cart;
