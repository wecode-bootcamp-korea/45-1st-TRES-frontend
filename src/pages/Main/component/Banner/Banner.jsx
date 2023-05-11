import React from 'react';
import './Banner.scss';

const Banner = () => {
  return (
    <div className="banner">
      <div className="slide-container">
        <video
          src="/images/mainData/banner/video1.mp4"
          alt="배너"
          className="banner-item"
          loop
          autoPlay
          muted
        />
      </div>
    </div>
  );
};

export default Banner;
