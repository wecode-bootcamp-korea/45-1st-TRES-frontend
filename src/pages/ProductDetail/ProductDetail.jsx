import React, { useState, useEffect } from 'react';
import ProductCalculation from './component/ProductCalculation';
import ProductImformation from './component/ProductImformation';
import ProductSummary from './component/ProductSummary';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState({});
  const {
    id,
    food,
    eng_food,
    price,
    vegetarian,
    continent,
    eng_continent,
    country,
    eng_country,
    spice_level,
    description,
    eng_description,
    allergy,
    eng_allergy,
    meat,
    eng_meat,
    food_image,
    review,
  } = productInfo;

  useEffect(() => {
    fetch('/data/product-detail.json')
      .then(res => res.json())
      .then(data => {
        setProductInfo(data);
      });
  }, []);

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <img
          className="product-detail-img"
          // 데이터 받으면 food_image 넣을 곳
          src="./images/productDetail/sample.png"
          alt={food}
        />
        <section className="product-detail-summary">
          <div className="product-region">
            {country} / {continent}
          </div>
          <h1 className="font-layout kor-name">{food}</h1>
          <h1 className="font-layout eng-name">{eng_food}</h1>
          <p className="font-layout product-price">{Math.floor(price)}원</p>
          <p className="description">{description}</p>
          <ProductSummary
            allergy={allergy}
            eng_allergy={eng_allergy}
            spice_level={spice_level}
            meat={meat}
            eng_meat={eng_meat}
            vegetarian={vegetarian}
            description={description}
            food_image={food_image}
          />
          <ProductCalculation price={price} id={id} food={food} />
        </section>
      </div>
      <ProductImformation review={review} />
    </div>
  );
};

export default ProductDetail;
