import React from 'react';
import { Link } from 'react-router-dom';
import './WorldCategory.scss';

const WorldCategory = () => {
  return (
    <div className="world-category">
      <div className="world-container">
        <h2 className="world-title">대륙별로 맛봐요</h2>
        <div className="continent-section">
          <ul className="continent-list">
            {WORLD_DATA.map(({ id, alt, src }) => {
              return (
                <li className="continent-item" key={id}>
                  <Link to="/#" className="continent-link">
                    <img src={src} alt={alt} className="country" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <button type="button" className="prev btn" />
          <button type="botton" className="next btn" />
        </div>
      </div>
    </div>
  );
};

export default WorldCategory;

const WORLD_DATA = [
  { id: 1, alt: '아프리카', src: './images/MainData/world/africa.png' },
  { id: 2, alt: '아시아', src: './images/MainData/world/asia.png' },
  { id: 3, alt: '오세아니아', src: './images/MainData/world/oceania.png' },
  { id: 4, alt: '북미', src: './images/MainData/world/northamerica.png' },
  { id: 5, alt: '남미', src: './images/MainData/world/southamerica.png' },
  { id: 6, alt: '유럽', src: './images/MainData/world/europe.png' },
];
