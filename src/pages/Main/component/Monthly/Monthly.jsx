import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Monthly.scss';

const VIEW_COUNT = 4;

const Monthly = ({ mainPage }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imgRef = useRef(null);

  const totalSilde = mainPage?.length;

  const prevBtn = () => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  };

  const nextBtn = () => {
    if (activeIndex < totalSilde - VIEW_COUNT) {
      setActiveIndex(prev => prev + 1);
    }
  };

  useEffect(() => {
    imgRef.current.style.transform = `translateX(-${290 * activeIndex}px)`;
    imgRef.current.style.transition = 'all 0.3s ease-in';
  }, [activeIndex]);

  return (
    <div className="monthly">
      <div className="monthly-container">
        <h2 className="monthly-title">월간 베스트</h2>
        <div className="monthly-section">
          <ul className="monthly-list" ref={imgRef}>
            {mainPage &&
              mainPage.map(({ id, country, food, price, food_images }) => {
                return (
                  <li key={id} className="monthly-item">
                    <Link className="monthly-link" to={`/products/${id}`}>
                      <img src={food_images} alt={food} className="food-img" />
                      <div className="food-info">
                        <p className="food-name">{food}</p>
                        <p className="food-country">{country}</p>
                        <p className="price">
                          {Math.floor(price).toLocaleString()}원
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
          </ul>
          <button
            type="button"
            className="prev btn"
            onClick={prevBtn}
            disabled={activeIndex === 0}
          />
          <button
            type="botton"
            className="next btn"
            onClick={nextBtn}
            disabled={activeIndex === totalSilde - VIEW_COUNT}
          />
        </div>
      </div>
    </div>
  );
};

export default Monthly;
