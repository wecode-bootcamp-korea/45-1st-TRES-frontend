import React from 'react';
import FooterMain from './component/FooterMain/FooterMain';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <FooterMain />
        <div className="footer-sub-section">
          <div className="locate-since">
            <p className="locate">대한민국</p>
            <p className="since">{SINCE}</p>
          </div>
          <div className="sub-main">
            <ul className="sub-main-list">
              {SUBMAIN.map(({ id, title }) => {
                return (
                  <li className="sub-main-item" key={id}>
                    <button className="sub-main-btn">{title}</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="footer-legal-section">
          <div className="business-customer-box">
            <p className="text">{BUSINESSINFO}</p>
            <p className="text">{CUSTOMERSERVICE}</p>
          </div>
          <div className="payment-legal-box">
            <p className="text">{PAYMENTINFO}</p>
            <p className="text">
              {LEGALINFO}
              <button className="legal-detail">자세히 보기</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const SUBMAIN = [
  { id: 1, title: '이용약관' },
  { id: 2, title: '개인정보처리방침' },
  { id: 3, title: '위치기반서비스' },
  { id: 4, title: '음식제조 운영 방침' },
];
const SINCE = '© 2023 Seké, Inc. All Rights Reserved';
const BUSINESSINFO =
  '(주)세개음식 대표 TRES KIM | 서울시 강남구 테헤란로 427 위워크 타워 10층 | 통신판매업신고번호 2023-서울강남-12345 | 등록번호 302-06-99885';
const CUSTOMERSERVICE =
  '고객센터 전화 문의 080-0987-6543 FAX 02-1234-5678 | 이메일 customer@seke.com | 호스팅서비스사업자 (주)세개음식';
const PAYMENTINFO =
  '현금 등으로 결제 시 안전 거래를 위해 세개음식 쇼핑몰에서 가입하신 한국결제네트웍스 자사의 구매안전 서비스(결제대금예치)를 이용하실 수 있습니다.';
const LEGALINFO = '콘텐츠산업진흥법에 의한 콘텐츠 보호 안내';
