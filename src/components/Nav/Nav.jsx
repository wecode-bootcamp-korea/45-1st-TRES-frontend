import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './component/CategoryList/CategoryList';
import Search from './component/Search/Search';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="nav-top-section">
          <div className="top-section">
            <div className="nav-link-box">
              <Link to="/#" className="to-find-shop top-link">
                매장찾기
              </Link>
              <Link to=".#" className="to-customer-service top-link">
                고객센터
              </Link>
              <Link to="/#" className="to-login top-link">
                로그인 / 회원가입
              </Link>
            </div>
          </div>
        </div>
        <div className="nav-bottom-section">
          <div className="bottom-section">
            <button className="nav-logo">logo</button>
            <CategoryList />
            <Search />
            <div className="bottom-right">
              <button className="to-like link-btn">
                <img
                  src="/images/icon/heart.svg"
                  alt="좋아요"
                  className="like-icon icon"
                />
              </button>
              <button className="to-cart link-btn">
                <img
                  src="/images/icon/cartbag.svg"
                  alt="장바구니로"
                  className="cart-icon icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
