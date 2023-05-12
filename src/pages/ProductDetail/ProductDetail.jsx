import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCalculation from './component/ProductCalculation/ProductCalculation';
import ProductImformation from './component/ProductInformation/ProductImformation';
import ProductSummary from './component/ProductSummary/ProductSummary';
import './ProductDetail.scss';
import { API } from '../../config';

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [languageType, setLanguageType] = useState(true);
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

  let Food = languageType ? productInfo.food : productInfo.eng_food;
  let Continent = languageType
    ? productInfo.continent
    : productInfo.eng_continent;
  let Country = languageType ? productInfo.country : productInfo.eng_country;
  let Description = languageType
    ? productInfo.description
    : productInfo.eng_description;
  let Allergy = languageType ? productInfo.allergy : productInfo.eng_allergy;
  let Meat = languageType ? productInfo.meat : productInfo.eng_meat;

  useEffect(() => {
    fetch(`${API.PRODUCT_DETAIL}${foodid}`)
      .then(res => res.json())
      .then(data => {
        setProductInfo(data);
      });
  }, [foodid]);

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <img className="product-detail-img" src={food_image} alt={Food} />
        <section className="product-detail-summary">
          <div className="language-switch-section">
            <button
              className="switch-button"
              onClick={() => setLanguageType(!languageType)}
            >
              <img
                src="/images/icon/earth1.png"
                alt="언어변경"
                className="switch-img"
              />
            </button>
          </div>
          <div className="product-region">
            {Continent} / {Country}
          </div>
          <h1 className="font-layout">{Food}</h1>
          <p className="font-layout product-price">
            {Math.floor(price).toLocaleString()}원
          </p>
          <p className="description">{Description}</p>
          <ProductSummary
            allergy={Allergy}
            spice_level={spice_level}
            meat={Meat}
            vegetarian={vegetarian}
            description={Description}
            languageType={languageType}
          />
          <ProductCalculation
            price={price}
            id={id}
            food={Food}
            languageType={languageType}
          />
        </section>
      </div>
      <ProductImformation
        food={Food}
        review={review}
        languageType={languageType}
      />
    </div>
  );
};

export default ProductDetail;
