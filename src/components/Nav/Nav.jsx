import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CP/CategoryList/CategoryList';
import Search from './CP/Search/Search';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <div>
          <div className="nav-container-top">
            <div className="nav-link-section">
              <Link to="/#" className="to-find-shop top-link">
                매장찾기
              </Link>
              <Link to=".#" className="to-customer-service top-link">
                고객센터
              </Link>
              <Link to="/#" className="to-login top-link">
                로그인/회원가입
              </Link>
            </div>
          </div>
        </div>
        <div className="nav-container-bottom">
          <button className="nav-logo">logo</button>
          <CategoryList />
          <Search />
          <div className="nav-bottom-right">
            <button className="nav-like">hrt</button>
            <Link to="/cart" className="to-cart">
              ct
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
