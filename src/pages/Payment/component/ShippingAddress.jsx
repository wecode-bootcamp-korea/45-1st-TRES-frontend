import React from 'react';
import './ShippingAddress.scss';

const ShippingAddress = () => {
  return (
    <section className="shipping-address">
      <h2 className="shipping-address-title">배송 옵션</h2>
      <div>
        <input
          id="check-box-same"
          className="same-as-orderer"
          type="checkbox"
        />
        <label htmlFor="check-box-same">주문자 정보와 동일</label>
      </div>
      <div className="input-name">
        <input
          className="input-full-name input-last-name"
          type="text"
          placeholder="성"
        />
        <input className="input-full-name" type="text" placeholder="이름" />
      </div>
      <div className="hint-name">
        <span className="hint-full-name hint-last-name">성을 입력하세요</span>
        <span className="hint-full-name">이름을 입력하세요.</span>
      </div>
      <input
        className="input-address"
        type="text"
        placeholder="도로명, 건물명 또는 지번으로 검색 예) 테헤란로 152, 혹은 역삼동 737"
      />
      <div className="hint-address">
        주소 선택을 완료하거나 수동으로 주소를 입력해 주세요.
      </div>
      <div className="shipper-information">
        <input
          className="input-info input-phone-number"
          type="text"
          placeholder="전화번호"
        />
        <input className="input-info" type="text" placeholder="이메일" />
      </div>
      <div className="hint-information">
        <span className="hint-info hint-phone-number">
          필수 작성 항목입니다.
        </span>
        <span className="hint-info">유효한 이메일 주소를 입력하세요.</span>
      </div>
    </section>
  );
};

export default ShippingAddress;
