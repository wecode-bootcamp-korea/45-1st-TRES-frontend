import React, { useState, useEffect } from 'react';
import PaymentProduct from './component/PaymentProduct';
import ShippingAddress from './component/ShippingAddress';
import PaymentModal from './component/PaymentModal';
import './Payment.scss';
const DELIVERY_FEE = 3000;
const Payment = () => {
  const [paymentProduct, setPaymentProduct] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [isDisabledPayment, setIsDisabledPayment] = useState(true);
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [checkAddressValue, setCheckAddressValue] = useState({});
  const possessionPoint = paymentProduct[0] && paymentProduct[0].point;
  const foodPriceSum = foodList.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  const paymentPrice =
    possessionPoint >= foodPriceSum + DELIVERY_FEE
      ? 0
      : foodPriceSum + DELIVERY_FEE - possessionPoint;
  const remainPoint =
    possessionPoint >= foodPriceSum + DELIVERY_FEE
      ? possessionPoint - (foodPriceSum + DELIVERY_FEE)
      : 0;
  const deliveryValue = Object.values(checkAddressValue);
  const deliveryValueCheck = !deliveryValue.includes('');

  const handleTermsOfPurchase = () => {
    if (isCheckedTerms) {
      setIsCheckedTerms(false);
      setIsDisabledPayment(true);
    } else {
      if (paymentPrice === 0 && deliveryValueCheck) {
        setIsCheckedTerms(true);
        setIsDisabledPayment(false);
      }
    }
  };

  const showModal = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    fetch('/data/paymentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setPaymentProduct(data);
        setFoodList(data[0].food);
      });
  }, []);

  if (!possessionPoint) return '';
  return (
    <div className="payment">
      <h1 className="payment-title">결제하기</h1>
      <div className="payment-container">
        <div className="payment-step">
          <ShippingAddress
            paymentProduct={paymentProduct}
            setCheckAddressValue={setCheckAddressValue}
            isCheckedTerms={isCheckedTerms}
          />
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
              <span>{DELIVERY_FEE.toLocaleString()}원</span>
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
                checked={isCheckedTerms}
              />
              <label htmlFor="check-box-consent">구매 약관에 동의합니다.</label>
              <div className="purchase-complete-button">
                <button
                  className="purchase-button"
                  disabled={isDisabledPayment}
                  onClick={showModal}
                >
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
