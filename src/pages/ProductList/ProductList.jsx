import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import Product from './component/Product';
import Filter from './component/Filter';

const ProductList = () => {
  const [isSorted, setIsSorted] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('data/product-list.json')
      .then(response => response.json())
      .then(response => setProducts(response.data));
  }, []);

  return (
    <div className="product-list">
      <header className="list-header">
        <h1 className="continent">아시아</h1>
        <button
          className="sort-button"
          onClick={() => setIsSorted(prev => !prev)}
        >
          <span className="sort-by">정렬 기준</span>
          <img
            className="sort-img"
            alt="더보기"
            src={`images/icon/${
              isSorted ? 'angle-up-solid' : 'angle-down-solid'
            }.svg`}
          />
        </button>
        {isSorted ? (
          <ul className="sort-list">
            {SORT_MENU.map(({ id, content }) => (
              <li key={id}>{content}</li>
            ))}
          </ul>
        ) : null}
      </header>

      <div className="product-container">
        <Filter />
        <div className="products">
          {products.map(product => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

const imgs = new Array(30);

const SORT_MENU = [
  { id: 0, content: '높은 인기순' },
  { id: 1, content: '낮은 인기순' },
  { id: 2, content: '높은 가격순' },
  { id: 3, content: '낮은 가격순' },
];
