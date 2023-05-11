import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductInCart from './componet/ProductInCart';
import ProductRecommendation from './componet/ProductRecommendation';
import { CART_API } from '../../config';
import { PAYMENT_API } from '../../config';
import './Cart.scss';

const DELIVERY_FEE = 3000;

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [recommandList, setRecommandList] = useState([]);
  const [productPrice, setProductPrice] = useState(0);
  const [checkItems, setCheckItems] = useState([]);
  const [linkToPayment, setLinkToPayment] = useState(true);
  const navigate = useNavigate();

  const checkAll = checked => {
    checked
      ? setCheckItems(cartList?.map(item => item.orderItemsId))
      : setCheckItems([]);
  };

  const checkSingle = (checked, id) => {
    checked
      ? setCheckItems(prev => [...prev, id])
      : setCheckItems(checkItems.filter(item => item !== id));
  };

  const deleteSelectItem = () => {
    fetch(`${CART_API}?${checkItems.join()}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
    });
  };

  const goToPaymentPage = () => {
    fetch(`${PAYMENT_API}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
      body: JSON.stringify({
        foodId: checkItems,
      }),
    });
    navigate('/payment');
  };

  const token = localStorage.getItem('TOKEN');

  useEffect(() => {
    fetch(`${CART_API}/cart`, {
      method: 'GET',
      headers: {
        authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        setCartList(data);
      });
  }, [token]);

  useEffect(() => {
    fetch('/data/recommandData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setRecommandList(data);
      });
  }, []);

  useEffect(() => {
    if (productPrice > 0) {
      setLinkToPayment(false);
    } else {
      setLinkToPayment(true);
    }
  }, [productPrice]);

  return (
    <div className="cart">
      <div className="cart-container">
        <section className="shopping-basket">
          <h1 className="shopping-basket-title">장바구니</h1>
          <div className="select-and-delete">
            <div className="check-all-select">
              <input
                id="check-all"
                className="check-box"
                type="checkbox"
                onChange={e => checkAll(e.target.checked)}
                checked={checkItems.length === cartList.length}
              />
              <label htmlFor="check-all" className="select-all">
                전체 선택
              </label>
            </div>
            <button className="delete-button-select" onClick={deleteSelectItem}>
              삭제
            </button>
          </div>
          <ul>
            {cartList?.map(item => (
              <ProductInCart
                key={item.orderItemsId}
                id={item.orderItemsId}
                checkItems={checkItems}
                checkSingle={checkSingle}
                cartList={cartList}
                setProductPrice={setProductPrice}
                productPrice={productPrice}
                quantity={item.orderCount}
              />
            ))}
          </ul>
        </section>
        <section className="order-history">
          <h1 className="order-history-title">주문 내역</h1>
          <div className="price-info order-price">
            <span>상품 금액</span>
            <span>{productPrice.toLocaleString()}원</span>
          </div>
          <div className="price-info delivery-price">
            <span>배송비</span>
            <span>{DELIVERY_FEE.toLocaleString()}원</span>
          </div>
          <div className="price-info total-price">
            <span>총 결제 금액</span>
            <span>{(productPrice + DELIVERY_FEE).toLocaleString()}원</span>
          </div>
          <button
            className="order-button"
            onClick={goToPaymentPage}
            disabled={linkToPayment}
          >
            주문결제
          </button>
        </section>
      </div>
      <section className="product-recommendation-list">
        <div className="product-recommendation-list-title-box">
          <h2 className="product-recommendation-list-title">추천상품</h2>
        </div>
        <ul className="product-in-recommendation">
          {recommandList.map(item => (
            <ProductRecommendation
              key={item.id}
              title={item.title}
              titleEng={item.titleEng}
              price={item.price}
              foodImg={item.foodImg}
              recommandList={recommandList}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Cart;
