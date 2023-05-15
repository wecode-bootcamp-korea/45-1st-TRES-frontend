import React, { useState, useEffect, useRef } from 'react';
import { API } from '../../../config';
import './ProductInCart.scss';

let selectList = [];
const ProductInCart = props => {
  const { id, checkItems, cartList, checkSingle, setProductPrice, quantity } =
    props;
  const [{ food, engFood, country, continent, orderPrice, food_image }] =
    cartList;
  const [isDisabled, setIsDisabled] = useState(true);
  const [quantityChange, setQuantityChange] = useState(quantity);
  const totalPrice = orderPrice * quantityChange;
  const token = localStorage.getItem('TOKEN');
  const test = useRef();
  const handleChange = e => {
    test.current.value = e.target.value;
    setIsDisabled(false);
  };

  const handleCount = id => {
    fetch(API.CART_API, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
      body: JSON.stringify({
        foodId: id,
        quantity: quantityChange,
      }),
    });
    setQuantityChange(test.current.value);
    setIsDisabled(true);
  };

  const selectDelete = id => {
    if (checkItems.includes(id)) {
      fetch(`${API.CART_API}?${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: token,
        },
      });
    }
  };

  useEffect(() => {
    if (checkItems.includes(id)) {
      const selectCancle = selectList.filter(item => item.id !== id);
      selectList = selectCancle;
      let selectAdd = {};
      selectAdd = {
        id: id,
        sum: totalPrice,
      };
      selectList = [...selectList, selectAdd];
    } else {
      const selectCancle = selectList.filter(item => item.id !== id);
      selectList = selectCancle;
    }
    const priceSum = selectList.reduce(
      (accumulator, currentValue) => accumulator + currentValue.sum,
      0
    );
    setProductPrice(priceSum);
  }, [quantityChange, checkItems]);

  return (
    <li className="product-in-cart">
      <div className="product-information">
        <input
          className="check-box"
          type="checkbox"
          onChange={e => checkSingle(e.target.checked, id)}
          checked={checkItems.includes(id)}
        />
        <img
          className="product-img"
          src={food_image}
          alt="장바구니에 담은 이미지"
        />
        <div className="product-information-middle">
          <div className="product-name">{food}</div>
          <div className="product-name-eng">{engFood}</div>
          <div className="product-country">{`${country}/${continent}`}</div>
          <span className="quantity">수량 : </span>
          <span className="count-button">
            <select
              className="count-change-button"
              onChange={e => handleChange(e)}
              defaultValue={quantity}
              ref={test}
            >
              {QUANTITY_SELECT.map(item => (
                <option key={item.id} value={item.value}>
                  {item.value}
                </option>
              ))}
            </select>
            <button
              className="count-check-button"
              disabled={isDisabled}
              onClick={() => handleCount(id)}
            >
              변경 완료
            </button>
          </span>
        </div>
        <div className="product-information-end">
          <div className="product-price">{totalPrice.toLocaleString()}원</div>
          <button className="delete-button-individual">
            <img
              className="delete-img-individual"
              src="/images/cart/trash-alt-regular.svg"
              alt="삭제기능이 있는 휴지통 이미지."
              onClick={() => {
                selectDelete(id);
              }}
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
