import React, { useRef } from 'react';
import MainInfo from './MainInfo/MainInfo';
import SubInfo from './SubInfo/SubInfo';
import Review from './Review/Review';
import './ProductImformation.scss';

const ProductImformation = ({ food, eng_food, review }) => {
  const scrollRef = useRef([]);

  const moveToScroll = index => {
    scrollRef.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="product-information" ref={e => (scrollRef.current[0] = e)}>
      <div className="description-button-box">
        <button
          className="description-button description"
          onClick={() => moveToScroll(0)}
        >
          상품설명
        </button>
        <button
          className="description-button detail"
          onClick={() => moveToScroll(1)}
        >
          상세정보
        </button>
        <button
          className="description-button review"
          onClick={() => moveToScroll(2)}
        >
          리뷰
        </button>
      </div>
      <div className="info-main-container">
        <div className="moveToMainInfo scroll-box">
          <MainInfo />
        </div>
        <div
          className="moveTosubnInfo scroll-box"
          ref={e => (scrollRef.current[1] = e)}
        >
          <SubInfo />
        </div>
        <div
          className="moveToReview scroll-box"
          ref={e => (scrollRef.current[2] = e)}
        >
          <Review food={food} eng_food={eng_food} review={review} />
        </div>
      </div>
    </div>
  );
};

export default ProductImformation;
