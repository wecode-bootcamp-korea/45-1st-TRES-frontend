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
            <p className="since">{since}</p>
          </div>
          <div className="sub-menu">
            <ul className="sub-menu-list">
              <li className="sub-menu-item">
                <button className="sub-menu-btn">이용약관</button>
              </li>
              <li className="sub-menu-item">
                <button className="sub-menu-btn">개인정보처리방침</button>
              </li>
              <li className="sub-menu-item">
                <button className="sub-menu-btn">위치기반 서비스</button>
              </li>
              <li className="sub-menu-item">
                <button className="sub-menu-btn">
                  영상정보처리기기 운영 방침
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-legal-section">
          <div className="business-customer-box">
            <p className="text">{businessInfo}</p>
            <p className="text">{customerService}</p>
          </div>
          <div className="payment-legal-box">
            <p className="text">{paymentInfo}</p>
            <p className="text">
              {legalInfo}
              <button className="legal-detail">자세히 보기</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const since = '© 2023 Seké, Inc. All Rights Reserved';

const businessInfo =
  '(주)세개음식 대표 TRES KIM | 서울시 강남구 테헤란로 427 위워크 타워 10층 | 통신판매업신고번호 2023-서울강남-12345 | 등록번호 302-06-99885';

const customerService =
  '고객센터 전화 문의 080-0987-6543 FAX 02-1234-5678 | 이메일 customer@seke.com | 호스팅서비스사업자 (주)세개음식';

const paymentInfo =
  '현금 등으로 결제 시 안전 거래를 위해 세개음식 쇼핑몰에서 가입하신 한국결제네트웍스 자사의 구매안전 서비스(결제대금예치)를 이용하실 수 있습니다.';

const legalInfo = '콘텐츠산업진흥법에 의한 콘텐츠 보호 안내';
