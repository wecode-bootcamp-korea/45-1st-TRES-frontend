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
