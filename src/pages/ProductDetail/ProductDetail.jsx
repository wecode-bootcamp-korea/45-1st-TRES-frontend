import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCalculation from './component/ProductCalculation/ProductCalculation';
import ProductImformation from './component/ProductImformation/ProductImformation';
import ProductSummary from './component/ProductSummary/ProductSummary';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState([]);
  const params = useParams();

  const foodid = params.foodid;

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
    fetch(`http://10.58.52.78:3000/products/${foodid}`)
      .then(res => res.json())
      .then(data => {
        setProductInfo(data);
      });
  }, [foodid]);

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <img className="product-detail-img" src={food_image} alt={food} />
        <section className="product-detail-summary">
          <div className="product-region">
            {country} / {continent}
          </div>
          <h1 className="font-layout kor-name">{food}</h1>
          <h1 className="font-layout eng-name">{eng_food}</h1>
          <p className="font-layout product-price">
            {Math.floor(price).toLocaleString()}원
          </p>
          <p className="description">{description}</p>
          <ProductSummary
            allergy={allergy}
            eng_allergy={eng_allergy}
            spice_level={spice_level}
            meat={meat}
            eng_meat={eng_meat}
            vegetarian={vegetarian}
            description={description}
          />
          <ProductCalculation price={price} id={id} food={food} />
        </section>
      </div>
      <ProductImformation review={review} />
    </div>
  );
};

export default ProductDetail;
