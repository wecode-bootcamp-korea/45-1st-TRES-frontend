import React, { useState, useEffect, useRef } from 'react';
import PaymentProduct from './component/PaymentProduct';
import ShippingAddress from './component/ShippingAddress';
import PaymentModal from './component/PaymentModal';
import { API } from '../../config';
import './Payment.scss';
import { useSearchParams } from 'react-router-dom';

const DELIVERY_FEE = 3000;

const Payment = () => {
  const [paymentProduct, setPaymentProduct] = useState([]);
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [isDisabledPayment, setIsDisabledPayment] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const deliveryDataIni = useRef([]);
  const deliveryValueObj = {
    firstName: paymentProduct[0]?.firstName,
    lastName: paymentProduct[0]?.lastName,
    address: paymentProduct[0]?.address,
    phoneNumber: paymentProduct[0]?.phoneNumber,
    email: paymentProduct[0]?.email,
  };
  const deliveryValue = Object.values(deliveryValueObj);
  const deliveryValueCheck = !deliveryValue.includes('');
  const possessionPoint = paymentProduct[0]?.points;
  const foodPriceSum = paymentProduct[0]?.food.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.orderPrice * currentValue.quantity,
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

  const showOrderComplete = () => {
    fetch(API.PAYMENT_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify({
        point: foodPriceSum + DELIVERY_FEE,
        firstName: paymentProduct[0].firstName,
        lastName: paymentProduct[0].lastName,
        address: paymentProduct[0].address,
        phoneNumber: paymentProduct[0].phoneNumber,
        email: paymentProduct[0].email,
      }),
    }).then(response => {
      if (response.status === 200) {
        setModalOpen(true);
      }
    });
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const token = localStorage.getItem('TOKEN');
  useEffect(() => {
    fetch(`${API.PAYMENT_API}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
      body: JSON.stringify({
        foodId: searchParams.getAll(`foodId`).map(item => parseInt(item)),
      }),
    })
      .then(res => res.json())
      .then(data => {
        setPaymentProduct(data);
        deliveryDataIni.current = data;
        // console.log('dsada', data);
      });
  }, [token]);

  return (
    <div className="payment">
      <h1 className="payment-title">결제하기</h1>
      <div className="payment-container">
        <div className="payment-step">
          <ShippingAddress
            paymentProduct={paymentProduct}
            isCheckedTerms={isCheckedTerms}
            setPaymentProduct={setPaymentProduct}
            deliveryDataIni={deliveryDataIni}
          />
          <section className="payment-progress">
            <h2 className="payment-progress-title">결제</h2>
            <div className="payment-calculate">
              <span>보유 포인트</span>
              <span>{Math.floor(possessionPoint).toLocaleString()}원</span>
            </div>
            <div className="payment-calculate">
              <span>상품 금액</span>
              <span>{Math.floor(foodPriceSum).toLocaleString()}원</span>
            </div>
            <div className="payment-calculate">
              <span>배송비</span>
              <span>{Math.floor(DELIVERY_FEE).toLocaleString()}원</span>
            </div>
            <div className="payment-calculate">
              <span>총 결제 금액</span>
              <span>{Math.floor(paymentPrice).toLocaleString()}원</span>
            </div>
            <div className="payment-calculate">
              <span>남은 포인트</span>
              <span>{Math.floor(remainPoint).toLocaleString()}원</span>
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
                  onClick={showOrderComplete}
                >
                  주문하기
                </button>
                {modalOpen && (
                  <PaymentModal
                    setModalOpen={setModalOpen}
                    foodList={paymentProduct[0].food}
                    orderNumber={paymentProduct[0].orderNumber}
                    firstFood={paymentProduct[0].food[0].foodKrName}
                  />
                )}
              </div>
            </div>
          </section>
        </div>
        <section className="payment-list">
          <div className="payment-list-title">구매 목록</div>
          <ul>
            {paymentProduct[0]?.food.map(item => (
              <PaymentProduct key={item.id} item={item} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Payment;
