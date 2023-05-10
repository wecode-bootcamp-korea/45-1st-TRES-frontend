import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Product from './component/Product';
import Filter from './component/Filter';
import './ProductList.scss';

const ProductList = () => {
  const [isSorted, setIsSorted] = useState(false);
  const [products, setProducts] = useState([]);
  const [continent, setContinent] = useState([]);
  const [url, setUrl] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();

  const sortType = searchParams.get('orderBy');
  const vegeType = searchParams.get('vegetarian');
  const cow = searchParams.get('meatId1');
  const pig = searchParams.get('meatId2');
  const sheep = searchParams.get('meatId3');
  const chicken = searchParams.get('meatId4');
  const spiceLevel = searchParams.get('spiceLevel');
  const allergyId1 = searchParams.get('allergyId1');
  const allergyId2 = searchParams.get('allergyId2');
  const allergyId3 = searchParams.get('allergyId3');

  const handleSort = sort => {
    searchParams.set('orderBy', sort);
    setSearchParams(searchParams);
  };

  console.log(searchParams.toString());

  useEffect(() => {
    fetch(
      `http://10.58.52.78:3000/products?countryId=${id}&${searchParams.toString()}`
      //   sortType?.length ? '&orderBy=' + sortType : ''
      // }${vegeType?.length ? '&vegetarian=' + vegeType : ''}${
      //   cow?.length ? '&meatId=' + cow : ''
      // }${pig?.length ? '&meatId=' + pig : ''}${
      //   sheep?.length ? '&meatId=' + sheep : ''
      // }${chicken?.length ? '&meatId=' + chicken : ''}${
      //   spiceLevel?.length ? '&spiceLevel=' + spiceLevel : ''
      // }${allergyId1?.length ? '' : '&allergyId=1'}${
      //   allergyId2?.length ? '' : '&allergyId=2'
      // }${allergyId3?.length ? '' : '&allergyId=3'}`
    )
      .then(response => response.json())
      .then(response => {
        setProducts(response.foods);
        setContinent(response.countries);
      });
  }, [id, searchParams]);

  return (
    <div className="product-list">
      <header className="list-header">
        <h1 className="continent">
          {products[0]?.continent} / {products[0]?.country}
        </h1>
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
        <Filter continent={continent} />
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
