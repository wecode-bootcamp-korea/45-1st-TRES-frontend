import React, { useState, useEffect, useRef } from 'react';
import './ProductInCart.scss';

let selectList = [];
const ProductInCart = props => {
  const [count, setCount] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [quantityChange, setQuantityChange] = useState(1);
  const [isChecked, setIsChecked] = useState(true);
  const { id, cartList, setProductPrice, setCheckList, setCartList } = props;
  const [{ title, titleEng, country, continent, price }] = cartList;
  const totalPrice = price * count;
  const handleChange = e => {
    setQuantityChange(e.target.value);
    setIsDisabled(false);
  };

  const handleCount = e => {
    setCount(quantityChange);
    setIsDisabled(true);
  };

  const handleCheckBox = e => {
    setIsChecked(!isChecked);
  };
  const test = useRef();
  const [test2, setTest2] = useState(cartList);
  const selectDelete = e => {
    // setCartList(cartList.filter(item => item.id !== e));
    setTest2(cartList.filter(item => item.id !== e));
    setIsChecked((test.current.checked = false));
  };

  useEffect(() => {
    if (isChecked) {
      const selectCancle = selectList.filter(item => item.id !== id);
      selectList = selectCancle;
      let selectAdd = {};
      selectAdd = { id: id, sum: totalPrice, selectCondition: isChecked };
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
    setCheckList(selectList);

    setCartList(test2);
  }, [isChecked, count]);

  return (
    <li className="product-in-cart">
      <div className="product-information">
        <input
          className="check-box"
          type="checkbox"
          onChange={e => handleCheckBox(e)}
          checked={isChecked}
          ref={test}
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
            <select
              className="count-change-button"
              onChange={e => handleChange(e)}
            >
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
            <button
              className="count-check-button"
              disabled={isDisabled}
              onClick={e => handleCount(e)}
            >
              변경 완료
            </button>
          </span>
        </div>
        <div className="product-information-end">
          <div className="product-price">{totalPrice}원</div>
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
