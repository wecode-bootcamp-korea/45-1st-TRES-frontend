import React, { useState, useEffect } from 'react';
import './Cart.scss';
import ProductInCart from './componet/ProductInCart';
import ProductRecommendation from './componet/ProductRecommendation';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [recommandList, setRecommandList] = useState([]);
  const [productPrice, setProductPrice] = useState(0);
  const [checkList, setCheckList] = useState([]);
  const deliveryFee = 3000;
  const isComparedCheck = cartList.length === checkList.length ? true : false;
  const [isCheckedAll, setIsCheckedAll] = useState(isComparedCheck);

  const handleChangeAll = () => {};

  // const selectDelete = e => {
  //   const test = [
  //     cartList.filter(item => <li key={item.id}>item.id !== e</li>),
  //   ];
  //   setCartList(test);
  //   console.log(e);
  // };

  useEffect(() => {
    fetch('/data/cartData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCartList(data);
      });

    fetch('/data/recommandData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setRecommandList(data);
      });
    // setIsCheckedAll(isComparedCheck);
  }, []);
  // }, [isComparedCheck]);

  const [checkItems, setCheckItems] = useState([]);
  const checkAll = checked =>
    checked ? setCheckItems(cartList.map(item => item.id)) : setCheckItems([]);
  const checkSingle = (checked, id) =>
    checked
      ? setCheckItems(prev => [...prev, id])
      : setCheckItems(checkItems.filter(item => item !== id));

  return (
    <div className="cart">
      <div className="cart-container">
        <section className="shopping-basket">
          <h1 className="shopping-basket-title">장바구니</h1>
          <div>
            <input
              id="check-all"
              className="check-box"
              type="checkbox"
              onChange={e => checkAll(e.target.checked)}
              checked={checkItems.length === cartList.length}
              // onChange={handleChangeAll}
              // checked={isCheckedAll}
            />
            <label htmlFor="check-all" className="select-all">
              전체 선택
            </label>
            <button className="delete-button-select">삭제</button>
          </div>
          <ul>
            {cartList.map(item => (
              <ProductInCart
                key={item.id}
                id={item.id}
                checkItems={checkItems}
                checkSingle={checkSingle}
                cartList={cartList}
                setProductPrice={setProductPrice}
                productPrice={productPrice}
                setCheckList={setCheckList}
                setCartList={setCartList}
              />
            ))}
          </ul>
        </section>
        <section className="order-history">
          <h1 className="order-history-title">주문 내역</h1>
          <div className="price-info order-price">
            <span>상품 금액</span>
            <span>{productPrice}원</span>
          </div>
          <div className="price-info delivery-price">
            <span>배송비</span>
            <span>3,000원</span>
          </div>
          <div className="price-info total-price">
            <span>총 결제 금액</span>
            <span>{productPrice + deliveryFee}원</span>
          </div>
          <button className="order-button">주문결제</button>
        </section>
      </div>
      <section className="product-recommendation-list">
        <div className="product-recommendation-list-title-box">
          <h2 className="product-recommendation-list-title">추천상품</h2>
          <span>
            <img
              className="slide"
              src="/images/cart/angle-left-solid.svg"
              alt="추천상품 왼쪽상품으로의 이동을 나타내는 이미지."
            />
            <img
              className="slide"
              src="/images/cart/angle-right-solid.svg"
              alt="추천상품 오른쪽상품으로의 이동을 나타내는 이미지."
            />
          </span>
        </div>
        <ul className="product-in-recommendation">
          {recommandList.map(item => (
            <ProductRecommendation key={item.id} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Cart;
