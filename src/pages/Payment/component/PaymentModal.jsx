import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentModal.scss';

const PaymentModal = ({ setModalOpen, foodList, orderNumber, firstFood }) => {
  const navigate = useNavigate();
  const closeModal = () => {
    setModalOpen(false);
    navigate('/');
  };

  return (
    <div className="payment-modal">
      <div className="modal">
        <p>
          {firstFood} 외 {foodList.length - 1}건이
        </p>
        <p className="check-content">주문 완료되었습니다.</p>
      </div>
      <button className="close" onClick={closeModal}>
        확인
      </button>
    </div>
  );
};

export default PaymentModal;
