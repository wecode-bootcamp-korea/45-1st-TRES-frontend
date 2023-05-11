import React, { useState, useEffect } from 'react';
import './ShippingAddress.scss';

const ShippingAddress = ({
  paymentProduct,
  isCheckedTerms,
  setPaymentProduct,
  deliveryDataIni,
}) => {
  const [isCheckedCheckboxSame, setIsCheckedCheckboxSame] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const handleUserSame = event => {
    if (isCheckedTerms === false) {
      if (event.target.checked) {
        setIsCheckedCheckboxSame(true);
        setPaymentProduct([
          {
            ...paymentProduct[0],
            firstName: deliveryDataIni.current[0].firstName,
            lastName: deliveryDataIni.current[0].lastName,
            address: deliveryDataIni.current[0].address,
            phoneNumber: deliveryDataIni.current[0].phoneNumber,
            email: deliveryDataIni.current[0].email,
          },
        ]);
      } else {
        setIsCheckedCheckboxSame(false);
        setPaymentProduct([
          {
            ...paymentProduct[0],
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            email: '',
          },
        ]);
      }
      setIsDisabled(!isDisabled);
    } else if (isCheckedTerms) {
      if (isCheckedCheckboxSame) {
        setIsCheckedCheckboxSame(true);
      } else if (isCheckedCheckboxSame === false) {
        setIsCheckedCheckboxSame(false);
      }
    }
  };

  const handleAddressInput = event => {
    const { name, value } = event.target;
    setPaymentProduct([{ ...paymentProduct[0], [name]: value }]);
  };

  useEffect(() => {
    if (isCheckedTerms) {
      setIsDisabled(true);
    } else if (isCheckedTerms === false && isCheckedCheckboxSame === false) {
      setIsDisabled(false);
    }
  }, [isCheckedTerms, isCheckedCheckboxSame]);

  return (
    <section className="shipping-address">
      <h2 className="shipping-address-title">배송 옵션</h2>
      <div className="button-box">
        <div className="button-user-same">
          <input
            id="check-box-same"
            className="same-as-orderer"
            type="checkbox"
            onChange={handleUserSame}
            checked={isCheckedCheckboxSame}
          />
          <label htmlFor="check-box-same">주문자 정보와 동일</label>
        </div>
      </div>
      <div className="input-name">
        <input
          className="input-full-name input-last-name"
          type="text"
          placeholder="성"
          name="lastName"
          value={paymentProduct[0] ? paymentProduct[0].lastName : ''}
          onChange={handleAddressInput}
          disabled={isDisabled}
        />
        <input
          className="input-full-name"
          type="text"
          placeholder="이름"
          name="firstName"
          value={paymentProduct[0] ? paymentProduct[0].firstName : ''}
          onChange={handleAddressInput}
          disabled={isDisabled}
        />
      </div>
      <div className="hint-name">
        <span
          className={
            paymentProduct[0]?.lastName === ''
              ? 'hint-full-name hint-last-name'
              : 'hint-full-name hint-last-name visible'
          }
        >
          성을 입력하세요
        </span>
        <span
          className={
            paymentProduct[0]?.firstName === ''
              ? 'hint-full-name'
              : 'hint-full-name visible'
          }
        >
          이름을 입력하세요.
        </span>
      </div>
      <input
        className="input-address"
        type="text"
        placeholder="도로명, 건물명 또는 지번으로 검색 예) 테헤란로 152, 혹은 역삼동 737"
        name="address"
        value={paymentProduct[0] ? paymentProduct[0].address : ''}
        onChange={handleAddressInput}
        disabled={isDisabled}
      />
      <div
        className={
          paymentProduct[0]?.address === ''
            ? 'hint-address'
            : 'hint-address visible'
        }
      >
        주소 선택을 완료하거나 수동으로 주소를 입력해 주세요.
      </div>
      <div className="shipper-information">
        <input
          className="input-info input-phone-number"
          type="text"
          placeholder="전화번호"
          name="phoneNumber"
          value={paymentProduct[0] ? paymentProduct[0].phoneNumber : ''}
          onChange={handleAddressInput}
          disabled={isDisabled}
        />
        <input
          className="input-info"
          type="text"
          placeholder="이메일"
          name="email"
          value={paymentProduct[0] ? paymentProduct[0].email : ''}
          onChange={handleAddressInput}
          disabled={isDisabled}
        />
      </div>
      <div className="hint-information">
        <span
          className={
            paymentProduct[0]?.phoneNumber === ''
              ? 'hint-info hint-phone-number'
              : 'hint-info hint-phone-number visible'
          }
        >
          필수 작성 항목입니다.
        </span>
        <span
          className={
            paymentProduct[0]?.email === '' ? 'hint-info' : 'hint-info visible'
          }
        >
          유효한 이메일 주소를 입력하세요.
        </span>
      </div>
    </section>
  );
};

export default ShippingAddress;
