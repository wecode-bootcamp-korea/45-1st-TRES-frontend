import React from 'react';
import PaymentProduct from './component/PaymentProduct';
import ShippingAddress from './component/ShippingAddress';
import './Payment.scss';

const Payment = () => {
  return (
    <div className="payment">
      <h1 className="payment-title">결제하기</h1>
      <div className="payment-container">
        <div className="payment-step">
          <ShippingAddress />
          <section className="payment-progress">
            <h2 className="payment-progress-title">결제</h2>
            <div className="payment-point-current">
              <span>보유 포인트</span>
              <span>100,000원</span>
            </div>
            <div className="payment-price">
              <span>상품 금액</span>
              <span>78,000원</span>
            </div>
            <div className="payment-delivery-price">
              <span>배송비</span>
              <span>3,000원</span>
            </div>
            <div className="payment-total-price">
              <span>총 결제 금액</span>
              <span>81,000원</span>
            </div>
            <div className="payment-point-remain">
              <span>남은 포인트</span>
              <span>19,000원</span>
            </div>
          </section>
          <section className="payment-complete">
            <h2 className="payment-complete-title">주문 완료</h2>
            <div>
              <input className="consent-to-purchase" type="checkbox" />
              <label>구매 약관에 동의합니다.</label>
              <div>
                <button className="payment-complete-button">주문하기</button>
              </div>
            </div>
          </section>
        </div>
        <section className="payment-list">
          <div className="payment-list-title">구매 목록</div>
          <ul>
            {[1, 2, 3, 4].map(item => (
              <PaymentProduct key={item.index} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Payment;
