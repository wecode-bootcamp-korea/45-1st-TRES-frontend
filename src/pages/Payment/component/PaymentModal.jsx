import React from 'react';
import './PaymentModal.scss';

const PaymentModal = ({ setModalOpen, foodList, orderNumber }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="payment-modal">
      <div className="modal">
        <p>중국의 짜장밥 외 {foodList.length - 1}건이</p>
        <p className="check-content">주문 완료되었습니다.</p>
        <p>주문번호 : {orderNumber}</p>
      </div>
      <button className="close" onClick={closeModal}>
        확인
      </button>
    </div>
  );
};

export default PaymentModal;
