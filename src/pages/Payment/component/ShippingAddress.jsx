import React, { useState, useEffect } from 'react';
import './ShippingAddress.scss';

const ShippingAddress = ({ paymentProductList }) => {
  const [addressInfo, setAddressInfo] = useState([]);
  // const [userSame, setUserSame] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [addressValue, setAddressValue] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  const handleUserSame = event => {
    if (event.target.checked) {
      setAddressValue({
        firstName: paymentProductList[0].firstName,
        lastName: paymentProductList[0].lastName,
        address: paymentProductList[0].address,
        phoneNumber: paymentProductList[0].phoneNumber,
        email: paymentProductList[0].email,
      });
    } else {
      setAddressValue({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: '',
      });
    }
    // // setUserSame(!userSame);
    setIsDisabled(!isDisabled);
  };

  const handleAddressInput = event => {
    const { name, value } = event.target;
    setAddressValue({ ...addressValue, [name]: value });
  };

  useEffect(() => {
    // fetch('/data/paymentData.json', {
    //   method: 'GET',
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     setAddressInfo(data);
    //   });
    // if (userSame) {
    //   if (addressInfo.length > 0) {
    //     const { firstName, lastName, address, phoneNumber, email } =
    //       addressInfo[0];
    //     setInputValue({
    //       firstName: firstName || '',
    //       lastName: lastName || '',
    //       address: address || '',
    //       phoneNumber: phoneNumber || '',
    //       email: email || '',
    //     });
    //   }
    // } else {
    //   setInputValue({
    //     firstName: '',
    //     lastName: '',
    //     address: '',
    //     phoneNumber: '',
    //     email: '',
    //   });
    // }
  }, []);
  // }, [addressInfo]);

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
            // checked={userSame}
          />
          <label htmlFor="check-box-same">주문자 정보와 동일</label>
        </div>
        <button className="address-change">변경</button>
      </div>
      <div className="input-name">
        <input
          className="input-full-name input-last-name"
          type="text"
          placeholder="성"
          name="lastName"
          value={addressValue.lastName}
          onChange={handleAddressInput}
          disabled={isDisabled}
        />
        <input
          className="input-full-name"
          type="text"
          placeholder="이름"
          name="firstName"
          value={addressValue.firstName}
          onChange={handleAddressInput}
          disabled={isDisabled}
        />
      </div>
      <div className="hint-name">
        <span
          className={
            addressValue.lastName === ''
              ? 'hint-full-name hint-last-name'
              : 'hint-full-name hint-last-name visible'
          }
        >
          성을 입력하세요
        </span>
        <span
          className={
            addressValue.firstName === ''
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
        value={addressValue.address}
        onChange={handleAddressInput}
        disabled={isDisabled}
      />
      <div
        className={
          addressValue.address === '' ? 'hint-address' : 'hint-address visible'
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
          value={addressValue.phoneNumber}
          onChange={handleAddressInput}
          disabled={isDisabled}
        />
        <input
          className="input-info"
          type="text"
          placeholder="이메일"
          name="email"
          value={addressValue.email}
          onChange={handleAddressInput}
          disabled={isDisabled}
        />
      </div>
      <div className="hint-information">
        <span
          className={
            addressValue.phoneNumber === ''
              ? 'hint-info hint-phone-number'
              : 'hint-info hint-phone-number visible'
          }
        >
          필수 작성 항목입니다.
        </span>
        <span
          className={
            addressValue.email === '' ? 'hint-info' : 'hint-info visible'
          }
        >
          유효한 이메일 주소를 입력하세요.
        </span>
      </div>
    </section>
  );
};

export default ShippingAddress;
