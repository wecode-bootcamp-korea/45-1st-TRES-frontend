import React from 'react';
import './PaymentProduct.scss';

const PaymentProduct = ({ item }) => {
  const {
    foodName,
    foodNameEng,
    country,
    continent,
    price,
    quantity,
    foodImg,
  } = item;
  const priceSum = price * quantity;

  return (
    <li className="payment-product">
      <img className="payment-product-img" src={foodImg} alt="음식사진" />
      <div className="payment-product-information">
        <div>{foodName}</div>
        <div className="payment-product name-eng">{foodNameEng}</div>
        <div className="payment-product region">{`${country} / ${continent}`}</div>
        <div className="payment-product quantity-price">
          {`${quantity.toLocaleString()} / ${price.toLocaleString()}`}
        </div>
        <div className="payment-product total-price">
          {priceSum.toLocaleString()}원
        </div>
      </div>
    </li>
  );
};

export default PaymentProduct;
