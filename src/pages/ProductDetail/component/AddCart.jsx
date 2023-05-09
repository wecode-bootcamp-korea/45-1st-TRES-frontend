import React from 'react';
import './AddCart.scss';

const AddCart = ({ id, cost, count }) => {
  const toCart = () => {
    fetch();
  };

  let totalPrice = cost * count;
  return (
    <div className="addcart">
      <div className="product-total-price">
        <span className="total-price-text">총 상품금액 : </span>
        <span className="total-price-number">{totalPrice}원</span>
      </div>
      <div className="button-box">
        <img
          className="recommand-button"
          src="./images/icon/heart.svg"
          alt="좋아요"
        />
        <button className="cart-add-button" onClick={toCart}>
          장바구니 담기
        </button>
      </div>
    </div>
  );
};

export default AddCart;
