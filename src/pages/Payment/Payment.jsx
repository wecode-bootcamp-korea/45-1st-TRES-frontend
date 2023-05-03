import React from 'react';
import './Payment.scss';

const Payment = () => {
  return (
    <div className="payment">
      <h1 className="payment-title">결제하기</h1>
      <div className="payment-container">
        <div className="payment-step">
          <section className="shipping-address">
            <h2 className="shipping-address-title">배송 옵션</h2>
            <div>
              <input className="same-as-orderer" type="checkbox" />
              <label>주문자 정보와 동일</label>
            </div>
            <div>
              <input className="input-last-name" type="text" placeholder="성" />
              <input
                className="input-first-name"
                type="text"
                placeholder="이름"
              />
            </div>
            <div className="hint-name">
              <span className="hint-last-name">성을 입력하세요</span>
              <span className="hint-first-name">이름을 입력하세요.</span>
            </div>
            <input
              className="input-address"
              type="text"
              placeholder="도로명, 건물명 또는 지번으로 검색 예) 테헤란로 152, 혹은 역삼동
              737"
            />
            <div className="hint-address">
              주소 선택을 완료하거나 수동으로 주소를 입력해 주세요.
            </div>
            <div className="shipper-information">
              <input
                className="input-phone-number"
                type="text"
                placeholder="전화번호"
              />
              <input className="input-email" type="text" placeholder="이메일" />
            </div>
            <div className="hint-information">
              <span className="hint-phone-number">필수 작성 항목입니다.</span>
              <span className="hint-email">
                유효한 이메일 주소를 입력하세요.
              </span>
            </div>
          </section>
          <section className="payment-progress">
            <h2 className="payment-progress-title">결제</h2>
            <div className="payment-point-current">
              <span>보유 포인트</span>
              <span>100,000원</span>
            </div>
            <div className="payment-price">
              <span>상품 금액</span>
              <span>78,000원</span>
            </div>
            <div className="payment-delivery-price">
              <span>배송비</span>
              <span>3,000원</span>
            </div>
            <div className="payment-total-price">
              <span>총 결제 금액</span>
              <span>81,000원</span>
            </div>
            <div className="payment-point-remain">
              <span>남은 포인트</span>
              <span>19,000원</span>
            </div>
          </section>
          <section className="payment-complete">
            <h2 className="payment-complete-title">주문 완료</h2>
            <div>
              <input className="consent-to-purchase" type="checkbox" />
              <label>구매 약관에 동의합니다.</label>
              <div>
                <button className="payment-complete-button">주문하기</button>
              </div>
            </div>
          </section>
        </div>
        <section className="payment-list">
          <div className="payment-list-title">구매 목록</div>
          <ul>
            {[1, 2, 3, 4].map(item => (
              <li key={item.index} className="payment-product">
                <img
                  className="payment-product-img"
                  src="/images/payment/sampling.png"
                  alt="이미지가 없습니다."
                />
                <div className="payment-product-information">
                  <div>중국의 짜장밥</div>
                  <div className="payment-product-name-eng">
                    blackrice of china
                  </div>
                  <div className="payment-product-region">중국 / 아시아</div>
                  <div className="payment-product-quantity-price">
                    수량 : 3개 / 30,000원
                  </div>
                  <div className="payment-product-total-price">150,000원</div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Payment;
