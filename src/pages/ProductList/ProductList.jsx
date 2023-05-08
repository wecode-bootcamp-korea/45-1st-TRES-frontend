import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import Product from './component/Product';
import Filter from './component/Filter';

const ProductList = () => {
  const [isSorted, setIsSorted] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    fetch(`/product?countryId=1${sortType.length && 'sort=' + sortType}`);
  }, [sortType]);

  useEffect(() => {
    fetch(`/product?countryId=1`)
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
            {SORT_MENU.map(({ id, content, sort }) => (
              <li key={id} onClick={() => setSortType(sort)}>
                {content}
              </li>
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

const SORT_MENU = [
  { id: 0, content: '인기순', sort: 'Best' },
  { id: 1, content: '높은 가격순', sort: 'PriceAsc' },
  { id: 2, content: '낮은 가격순', sort: 'PriceDesc' },
];
