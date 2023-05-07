import React from 'react';
import './ProductInCart.scss';

const ProductInCart = () => {
  return (
    <li className="product-in-cart">
      <div className="product-information">
        <input id="check" className="check-box" type="checkbox" />
        <img
          className="product-img"
          src="/images/cart/sample.png"
          alt="장바구니에 담은 이미지"
        />
        <div className="product-information-middle">
          <div className="product-name">일본의 돈카츠 라멘</div>
          <div className="product-name-eng">fork of japan</div>
          <div className="product-country">일본 / 아시아</div>
          <span className="quantity">수량 : </span>
          <span className="count-button">
            <select>
              {QUANTITY_SELECT.map(item => (
                <option key={item.id} value={item.id}>
                  {item.value}
                </option>
              ))}
            </select>
          </span>
        </div>
        <div className="product-information-end">
          <div className="product-price">15,000원</div>
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

const QUANTITY_SELECT = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 4 },
  { id: 5, value: 5 },
  { id: 6, value: 6 },
  { id: 7, value: 7 },
  { id: 8, value: 8 },
  { id: 9, value: 9 },
  { id: 10, value: 10 },
];
