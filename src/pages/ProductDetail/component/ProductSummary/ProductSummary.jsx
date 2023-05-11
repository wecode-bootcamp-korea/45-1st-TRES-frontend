import React from 'react';
import './ProductSummary.scss';

const ProductSummary = ({
  Allergy,
  Meat,
  spice_level,
  vegetarian,
  languageType,
}) => {
  let delivery = {
    standard: languageType ? '배송' : 'delivery',
    detail: languageType ? '주문일 기준 3일이내' : 'in 3Days',
  };
  let origin = {
    standard: languageType ? '원산지' : 'origin',
    detail: languageType ? '한국' : 'korea',
  };
  let expirationDate = {
    standard: languageType ? '소비기한' : 'expiration date',
    detail: languageType
      ? '제조일로부터 3개월'
      : '3 months from manufacture date',
  };
  let meatType = {
    standard: languageType ? '고기종류' : 'meat',
  };
  let spicyLevel = {
    standard: languageType ? '매운 단계' : 'spicy level',
  };
  let allergyInfo = {
    standard: languageType ? '알러지' : 'allergy',
  };
  let vege = {
    standard: languageType ? '베지테리언' : 'vegetarian',
  };

  return (
    <table className="product-summary">
      <tbody className="table-body">
        <tr className="table-row">
          <th className="table-header-cell table-cell">{delivery.standard}</th>
          <td className="table-data-cell table-cell">{delivery.detail}</td>
        </tr>
        <tr className="table-row">
          <th className="table-header-cell table-cell">{origin.standard}</th>
          <td className="table-data-cell table-cell">{origin.detail}</td>
        </tr>
        <tr className="table-row">
          <th className="table-header-cell table-cell">{meatType.standard}</th>
          <td className="table-data-cell table-cell">{Meat}</td>
        </tr>
        <tr className="table-row">
          <th className="table-header-cell table-cell">
            {spicyLevel.standard}
          </th>
          <td className="table-data-cell table-cell">{spice_level}</td>
        </tr>
        <tr className="table-row product-allergy">
          <th className="table-header-cell table-cell">
            {allergyInfo.standard}
          </th>
          <td className="table-data-cell table-cell">{Allergy}</td>
        </tr>
        <tr className="table-row product-allergy">
          <th className="table-header-cell table-cell">{vege.standard}</th>
          <td className="table-data-cell table-cell">{`${
            vegetarian === 'yes' ? 'YES' : 'NO'
          }`}</td>
        </tr>
        <tr className="table-row">
          <th className="table-header-cell table-cell">
            {expirationDate.standard}
          </th>
          <td className="table-data-cell table-cell">
            {expirationDate.detail}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductSummary;
