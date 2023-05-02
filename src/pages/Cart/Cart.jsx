import React from 'react';
import './Cart.scss';

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
              <li key={item.index} className="product-box">
                <div className="product-information">
                  <input className="check-box" type="checkbox" />
                  <img
                    className="product-img"
                    src="/images/cart/sample.png"
                    alt="이미지가 없습니다."
                  />
                  <div className="product-information-middle">
                    <div className="product-name">일본의 돈카츠 라멘</div>
                    <div className="product-country">일본</div>
                    <div>
                      <span>수량 : </span>
                      <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                  <div className="product-information-end">
                    <div className="product-price">15,000원</div>
                    <button className="delete-button-individual">
                      <img
                        className="delete-img-individual"
                        src="/images/cart/delete.png"
                        alt="이미지가 없습니다."
                      />
                    </button>
                  </div>
                </div>
              </li>
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
        <h2 className="product-recommendation-list-title">추천상품</h2>
        <ul className="product-recommendation">
          {[1, 2, 3, 4].map(item => (
            <li key={item.index}>
              <img
                className="product-recommendation-img"
                src="/images/cart/sample.png"
                alt="이미지가 없습니다."
              />
              <div className="product-recommendation-name">인도의 인도카레</div>
              <div className="product-recommendation-country">인도</div>
              <div className="product-recommendation-price">12,000원</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Cart;
