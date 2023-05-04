import React, { useState } from 'react';
import './ProductList.scss';
import Product from './component/Product';
import Filter from './component/Filter';

const ProductList = () => {
  // 데이터 오는 곳
  const [isSort, setIsSort] = useState(false);

  return (
    <div className="product-list">
      <header className="list-header">
        <h1 className="continent">아시아</h1>
        <button
          className="sort-button"
          onClick={() => setIsSort(prev => !prev)}
        >
          <span className="sort-by">정렬 기준</span>
          {isSort ? (
            <img
              className="sort-img"
              alt="더보기"
              src="images/icon/angle-up-solid.svg"
            />
          ) : (
            <img
              className="sort-img"
              alt="더보기"
              src="images/icon/angle-down-solid.svg"
            />
          )}
        </button>
        {isSort ? (
          <ul className="sort-list">
            {SORT_MENU.map(menu => (
              <li key={menu.id}>{menu.content}</li>
            ))}
          </ul>
        ) : null}
      </header>

      <div className="product-container">
        <Filter />
        <div className="products">
          {imgs.map((img, index) => (
            <Product key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

const imgs = new Array(30).fill(0);

const SORT_MENU = [
  { id: 0, content: '높은 인기순' },
  { id: 1, content: '낮은 인기순' },
  { id: 2, content: '높은 가격순' },
  { id: 3, content: '낮은 가격순' },
];
