import React from 'react';
import { Link } from 'react-router-dom';
import './World.scss';

const World = () => {
  return (
    <div className="world">
      <div className="world-container">
        <h2 className="world-title">대륙별로 즐기기!</h2>
        <div className="continent-section">
          <ul className="continent-list">
            <li className="continent-item">
              <Link to="/#" className="continent-link">
                <img
                  src="./images/MainData/world/africa.png"
                  alt="아프리카로음식으로 이동"
                  className="country"
                />
              </Link>
            </li>
            <li className="continent-item">
              <Link to="/#" className="continent-link">
                <img
                  src="./images/MainData/world/asia.png"
                  alt="아프리카로음식으로 이동"
                  className="country"
                />
              </Link>
            </li>
            <li className="continent-item">
              <Link to="/#" className="continent-link">
                <img
                  src="./images/MainData/world/oceania.png"
                  alt="아프리카로음식으로 이동"
                  className="country"
                />
              </Link>
            </li>
            <li className="continent-item">
              <Link to="/#" className="continent-link">
                <img
                  src="./images/MainData/world/northamerica.png"
                  alt="아프리카로음식으로 이동"
                  className="country"
                />
              </Link>
            </li>
            <li className="continent-item">
              <Link to="/#" className="continent-link">
                <img
                  src="./images/MainData/world/southamerica.png"
                  alt="아프리카로음식으로 이동"
                  className="country"
                />
              </Link>
            </li>
            <li className="continent-item">
              <Link to="/#" className="continent-link">
                <img
                  src="./images/MainData/world/europe.png"
                  alt="아프리카로음식으로 이동"
                  className="country"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default World;
