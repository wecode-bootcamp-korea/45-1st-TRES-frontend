import React, { useState, useEffect } from 'react';
import PaymentProduct from './component/PaymentProduct';
import ShippingAddress from './component/ShippingAddress';
import './Payment.scss';
const deliveryFee = 3000;
const Payment = () => {
  const [PaymentProductList, setPaymentProductList] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const possessionPoint = PaymentProductList[0] && PaymentProductList[0].point;
  const foodPriceSum = foodList.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  const paymentPrice =
    possessionPoint >= foodPriceSum + deliveryFee
      ? 0
      : possessionPoint - (foodPriceSum + deliveryFee);
  const remainPoint =
    possessionPoint >= foodPriceSum + deliveryFee
      ? possessionPoint - (foodPriceSum + deliveryFee)
      : 0;
  useEffect(() => {
    fetch('/data/paymentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setPaymentProductList(data);
        setFoodList(data[0].food);
      });
  }, []);
  if (!possessionPoint) return '';
  return (
    <div className="payment">
      <h1 className="payment-title">결제하기</h1>
      <div className="payment-container">
        <div className="payment-step">
          <ShippingAddress />
          <section className="payment-progress">
            <h2 className="payment-progress-title">결제</h2>
            <div className="payment-calculate">
              <span>보유 포인트</span>
              <span>{possessionPoint.toLocaleString()}원</span>
            </div>
            <div className="payment-calculate">
              <span>상품 금액</span>
              <span>{foodPriceSum.toLocaleString()}원</span>
            </div>
            <div className="payment-calculate">
              <span>배송비</span>
              <span>{deliveryFee.toLocaleString()}원</span>
            </div>
            <div className="payment-calculate">
              <span>총 결제 금액</span>
              <span>{paymentPrice.toLocaleString()}원</span>
            </div>
            <div className="payment-calculate">
              <span>남은 포인트</span>
              <span>{remainPoint.toLocaleString()}원</span>
            </div>
          </section>
          <section className="payment-complete">
            <h2 className="payment-complete-title">주문 완료</h2>
            <div className="purchase">
              <input
                id="check-box-consent"
                className="consent-to-purchase"
                type="checkbox"
              />
              <label htmlFor="check-box-consent">구매 약관에 동의합니다.</label>
              <div className="purchase-complete-button">
                <button className="purchase-button">주문하기</button>
              </div>
            </div>
          </section>
        </div>
        <section className="payment-list">
          <div className="payment-list-title">구매 목록</div>
          <ul>
            {foodList.map(item => (
              <PaymentProduct key={item.foodId} item={item} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Payment;
