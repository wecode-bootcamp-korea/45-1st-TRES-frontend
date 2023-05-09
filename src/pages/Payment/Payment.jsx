import React, { useState, useEffect } from 'react';
import PaymentProduct from './component/PaymentProduct';
import ShippingAddress from './component/ShippingAddress';
import PaymentModal from './component/PaymentModal';
import './Payment.scss';

const Payment = () => {
  const [foodList, setFoodList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    fetch('/data/paymentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFoodList(data[0].food);
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
              <span>100,000원</span>
            </div>
            <div className="payment-calculate">
              <span>상품 금액</span>
              <span>78,000원</span>
            </div>
            <div className="payment-calculate">
              <span>배송비</span>
              <span>3,000원</span>
            </div>
            <div className="payment-calculate">
              <span>총 결제 금액</span>
              <span>81,000원</span>
            </div>
            <div className="payment-calculate">
              <span>남은 포인트</span>
              <span>19,000원</span>
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
                <button className="purchase-button" onClick={showModal}>
                  주문하기
                </button>
                {modalOpen && (
                  <PaymentModal
                    setModalOpen={setModalOpen}
                    foodList={foodList}
                  />
                )}
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
