import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddCart.scss';

const AddCart = ({ id, cost, count }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('TOKEN');

  const toCart = () => {
    token
      ? fetch(`http://10.58.52.249:3000/orders`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify({
            price: totalPrice,
            foodId: id,
            count: count,
          }),
        })
          .then(res => {
            if (res.ok) return res.json();
            throw new Error('통신실패!');
          })
          .catch(err => alert(`로그인 실패 ${err}`))
      : navigate('/login');
  };

  let totalPrice = cost * count;
  return (
    <div className="addcart">
      <div className="product-total-price">
        <span className="total-price-text">총 상품금액 : </span>
        <span className="total-price-number">
          {totalPrice.toLocaleString()}원
        </span>
      </div>
      <div className="button-box">
        <img
          className="recommand-button"
          src="/images/icon/heart.svg"
          alt="좋아요"
        />
        <button className="cart-add-button" onClick={toCart}>
          {`${token ? '장바구니 담기' : '로그인 하기'}`}
        </button>
      </div>
    </div>
  );
};

export default AddCart;
