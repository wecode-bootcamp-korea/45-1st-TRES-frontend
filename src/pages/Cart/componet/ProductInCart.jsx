import React, { useState } from 'react';
import './ProductInCart.scss';

let selectList = [];

const ProductInCart = ({ id, cartList, setProductPrice }) => {
  const [count, setCount] = useState(1);
  const [{ title, titleEng, country, continent, price }] = cartList;
  const totalPrice = price * count;
  const handleCount = e => {
    setCount(e.target.value);
  };

  const handleCheckBox = e => {
    let selectAdd = {};
    if (e.target.checked === true) {
      selectAdd = { id: id, sum: totalPrice };
      selectList = [...selectList, selectAdd];
    } else {
      let selectCancle = selectList.filter(item => item.id !== id);
      selectList = selectCancle;
    }
    let priceSum = selectList.reduce(
      (accumulator, currentValue) => accumulator + currentValue.sum,
      0
    );
    setProductPrice(priceSum);
  };

  return (
    <li className="product-in-cart">
      <div className="product-information">
        <input
          className="check-box"
          type="checkbox"
          onChange={e => handleCheckBox(e)}
        />
        <img
          className="product-img"
          src="/images/cart/sample.png"
          alt="장바구니에 담은 이미지"
        />
        <div className="product-information-middle">
          <div className="product-name">{title}</div>
          <div className="product-name-eng">{titleEng}</div>
          <div className="product-country">{`${country}/${continent}`}</div>
          <span className="quantity">수량 : </span>
          <span className="count-button">
            <select onChange={e => handleCount(e)}>
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
          </span>
        </div>
        <div className="product-information-end">
          <div className="product-price">{totalPrice}원</div>
          <button className="delete-button-individual">
            <img
              className="delete-img-individual"
              src="/images/cart/trash-alt-regular.svg"
              alt="삭제기능이 있는 휴지통 이미지."
            />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductInCart;
