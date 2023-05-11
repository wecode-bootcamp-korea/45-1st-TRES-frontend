import React from 'react';
import './Review.scss';

const Review = ({ food, eng_food, review }) => {
  return (
    <div className="review">
      <div className="review-container">
        <div className="review-title-section">
          <h2 className="review-title">상품 후기</h2>
        </div>
        <div className="review-main-section">
          <div className="review-user-box">
            <p className="review-user-name">트레스김</p>
          </div>
          <div className="review-text-box">
            <p className="review-product">
              {food} / {eng_food}
            </p>
            <p className="review-text">{review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
