import React, { useState, useEffect } from 'react';
import PaymentProduct from './component/PaymentProduct';
import ShippingAddress from './component/ShippingAddress';
import './Payment.scss';

const Payment = () => {
  const [PaymentProductList, setPaymentProductList] = useState([]);
  const [isDisabledPayment, setIsDisabledPayment] = useState(true);
  const [isCheckedTrems, setIsCheckedTrems] = useState(false);
  const possessionPoint = 30000;
  const paymentPrice = 20000;
  const remainPoint = possessionPoint - paymentPrice;
  const handleTermsOfPurchase = () => {
    if (isCheckedTrems) {
      setIsCheckedTrems(false);
      setIsDisabledPayment(true);
    } else {
      if (possessionPoint >= paymentPrice) {
        setIsCheckedTrems(true);
        setIsDisabledPayment(false);
      }
    }
  };
  useEffect(() => {
    fetch('http://localhost:3000/data/paymentProductData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setPaymentProductList(data);
      });
  }, []);

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
              <span>-20,000원</span>
            </div>
            <div className="payment-calculate">
              <span>배송비</span>
              <span>-0원</span>
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
                onChange={handleTermsOfPurchase}
                checked={isCheckedTrems}
              />
              <label htmlFor="check-box-consent">구매 약관에 동의합니다.</label>
              <div className="purchase-complete-button">
                <button
                  className="purchase-button"
                  disabled={isDisabledPayment}
                >
                  주문하기
                </button>
              </div>
            </div>
          </section>
        </div>
        <section className="payment-list">
          <div className="payment-list-title">구매 목록</div>
          <ul>
            {PaymentProductList.map(item => (
              <PaymentProduct key={item.id} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Payment;
