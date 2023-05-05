import React from 'react';
import './FooterMain.scss';
import { Link } from 'react-router-dom';

const FooterMain = () => {
  return (
    <div className="footermain">
      <div className="main-info-box">
        <ul className="info-list">
          {FOOTER_DATA_MEMBERSHIP.map(({ id, title, url }) => {
            return (
              <li className="info-item" key={id}>
                <Link to={url}>
                  <button className="info-item-btn">{title}</button>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="qna-list">
          {FOOTER_DATA_HELP.map(({ id, title, url }) => {
            return (
              <li className="qna-item" key={id}>
                <Link to={url}>
                  <button className="qna-item-btn">{title}</button>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="about-list">
          {FOOTER_DATA_ABOUT.map(({ id, title, url }) => {
            return (
              <li className="about-item" key={id}>
                <Link to={url}>
                  <button className="about-item-btn">{title}</button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="link-to-box">
        <ul className="to-social-list">
          <li className="to-social-item">
            <img className="icon" src="/images/icon/twitter.svg" alt="트위터" />
          </li>
          <li className="to-social-item">
            <img
              className="icon"
              src="/images/icon/facebook.svg"
              alt="페이스북"
            />
          </li>
          <li className="to-social-item">
            <img className="icon" src="/images/icon/youtube.svg" alt="유튜브" />
          </li>
          <li className="to-social-item">
            <img
              className="icon"
              src="/images/icon/instagram.svg"
              alt="인스타그램"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterMain;

const FOOTER_DATA_MEMBERSHIP = [
  { id: 1, title: '새로운소식', url: '/#' },
  { id: 2, title: '멤버가입', url: '/#' },
  { id: 3, title: '제휴업체', url: '/#' },
  { id: 4, title: '미슐랭가이드', url: '/#' },
];

const FOOTER_DATA_HELP = [
  { id: 1, title: '도움말', url: '/#' },
  { id: 2, title: '로그인 안내', url: '/#' },
  { id: 3, title: '주문배송조회', url: '/#' },
  { id: 4, title: '반품 정책', url: '/#' },
  { id: 5, title: '결제 방법', url: '/#' },
  { id: 6, title: '공지사항', url: '/#' },
  { id: 7, title: '문의하기', url: '/#' },
];

const FOOTER_DATA_ABOUT = [
  { id: 1, title: 'ABOUT US', url: '/#' },
  { id: 2, title: '소식', url: '/#' },
  { id: 3, title: '채용', url: '/#' },
  { id: 4, title: '투자자', url: '/#' },
  { id: 5, title: '지속가능성', url: '/#' },
];
