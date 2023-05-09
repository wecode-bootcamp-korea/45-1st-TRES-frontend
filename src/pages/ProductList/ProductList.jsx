import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import Product from './component/Product';
import Filter from './component/Filter';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const ProductList = () => {
  const [isSorted, setIsSorted] = useState(false);
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState('');
  const [sortedType, setSortedType] = useState('');
  const [api, setApi] = useState('http://10.58.52.78:3000/products?countryId=');
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();

  const sortType = searchParams.get('orderBy');

  const handleSort = sort => {
    searchParams.set('orderBy', sort);
    setSearchParams(searchParams);
    // if (url.includes(`?orderBy=${sortedType}`)) {
    //   setUrl(prev =>
    //     prev.replace(`?orderBy=${sortedType}`, `?orderBy=${sort}`)
    //   );
    //   navigate(url.replace(`?orderBy=${sortedType}`, `?orderBy=${sort}`));
    //   setSortedType(sort);
    //   return;
    // }
    // setUrl(prev => prev + `?orderBy=${sort}`);
    // navigate(url + `?orderBy=${sort}`);
    // setSortedType(sort);
  };

  useEffect(() => {
    fetch(
      `http://10.58.52.78:3000/products?countryId=${id}${
        sortType?.length ? '&orderBy=' + sortType : ''
      }`
    )
      .then(response => response.json())
      .then(response => setProducts(response.data));
  }, [sortType]);

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
            src={`/images/icon/${
              isSorted ? 'angle-up-solid' : 'angle-down-solid'
            }.svg`}
          />
        </button>
        {isSorted ? (
          <ul className="sort-list">
            {SORT_MENU.map(({ id, content, sort }) => (
              <li key={id} onClick={() => handleSort(sort)}>
                {content}
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      <div className="product-container">
        <Filter url={url} setUrl={setUrl} />
        <div className="products">
          {products?.map(product => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

const SORT_MENU = [
  { id: 0, content: '인기순', sort: 'best' },
  { id: 1, content: '높은 가격순', sort: 'priceDesc' },
  { id: 2, content: '낮은 가격순', sort: 'priceAsc' },
];
