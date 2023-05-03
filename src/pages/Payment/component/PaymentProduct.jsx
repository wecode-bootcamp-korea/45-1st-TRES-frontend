import React from 'react';
import './PaymentProduct.scss';

const PaymentProduct = () => {
  return (
    <li className="payment-product">
      <img
        className="payment-product-img"
        src="/images/payment/sampling.png"
        alt="이미지가 없습니다."
      />
      <div className="payment-product-information">
        <div>중국의 짜장밥</div>
        <div className="payment-product-name-eng">blackrice of china</div>
        <div className="payment-product-region">중국 / 아시아</div>
        <div className="payment-product-quantity-price">
          수량 : 3개 / 30,000원
        </div>
        <div className="payment-product-total-price">150,000원</div>
      </div>
    </li>
  );
};

export default PaymentProduct;
