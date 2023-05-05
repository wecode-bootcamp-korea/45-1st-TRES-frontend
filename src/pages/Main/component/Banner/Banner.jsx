import React from 'react';
import './Banner.scss';

const Banner = () => {
  return (
    <div className="banner">
      <div className="swiper-container">
        <img
          src="/images/mainData/banner/promotion.png"
          alt="배너"
          className="banner-item"
        />
      </div>
    </div>
  );
};

export default Banner;
