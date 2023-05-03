import React from 'react';
import './Filter.scss';

const Filter = () => {
  return (
    <div className="filter">
      <ul className="country">
        <li className="country-list">
          <span>한국</span>
        </li>
        <li className="country-list">
          <span>중국</span>
        </li>
        <li className="country-list">
          <span>일본</span>
        </li>
      </ul>
      <div className="vegetarian">
        <p className="filter-name">채식</p>
        <div>
          <input type="checkbox" id="vegetarian" name="vegetarian" />
          <label for="vegetarian">채식주의자</label>
        </div>
      </div>
      <div className="meat">
        <p className="filter-name">고기</p>
        <div>
          <input type="checkbox" id="cow" name="cow" />
          <label for="cow">소</label>
        </div>
        <div>
          <input type="checkbox" id="pig" name="pig" />
          <label for="pig">돼지</label>
        </div>
        <div>
          <input type="checkbox" id="sheep" name="sheep" />
          <label for="sheep">양</label>
        </div>
        <div>
          <input type="checkbox" id="chicken" name="chicken" />
          <label for="chicken">닭</label>
        </div>
      </div>
      <div className="allergy">
        <p className="filter-name">알러지</p>
        <div>
          <input type="checkbox" id="milk" name="milk" />
          <label for="milk">우유</label>
        </div>
        <div>
          <input type="checkbox" id="peanut" name="peanut" />
          <label for="peanut">땅콩</label>
        </div>
        <div>
          <input type="checkbox" id="egg" name="egg" />
          <label for="egg">계란</label>
        </div>
      </div>
      <div className="spicy">
        <p className="filter-name">맵기</p>
        <div>
          <input type="range" id="volume" name="volume" min="0" max="3" />
          <label for="volume" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
