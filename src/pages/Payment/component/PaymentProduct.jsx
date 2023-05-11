import React from 'react';
import './PaymentProduct.scss';

const PaymentProduct = ({ item }) => {
  const {
    foodKrName,
    foodEngName,
    country,
    continent,
    orderPrice,
    quantity,
    foodImage,
  } = item;
  const priceSum = orderPrice * quantity;

  return (
    <li className="payment-product">
      <img className="payment-product-img" src={foodImage} alt="음식사진" />
      <div className="payment-product-information">
        <div>{foodKrName}</div>
        <div className="payment-product name-eng">{foodEngName}</div>
        <div className="payment-product region">{`${country} / ${continent}`}</div>
        <div className="payment-product quantity-price">
          {`${quantity} / ${Math.floor(orderPrice).toLocaleString()}원`}
        </div>
        <div className="payment-product total-price">
          {priceSum.toLocaleString()}원
        </div>
      </div>
    </li>
  );
};

export default PaymentProduct;
