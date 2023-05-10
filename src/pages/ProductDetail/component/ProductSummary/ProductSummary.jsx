import React from 'react';
import './ProductSummary.scss';

const ProductSummary = ({
  allergy,
  eng_allergy,
  meat,
  eng_meat,
  spice_level,
  vegetarian,
}) => {
  return (
    <table className="product-summary">
      <tbody className="table-body">
        <tr className="table-row">
          <th className="table-header-cell table-cell">배송</th>
          <td className="table-data-cell table-cell">주문일 기준 3일이내</td>
        </tr>
        <tr className="table-row">
          <th className="table-header-cell table-cell">원산지</th>
          <td className="table-data-cell table-cell">국내산</td>
        </tr>
        <tr className="table-row">
          <th className="table-header-cell table-cell">고기 종류</th>
          <td className="table-data-cell table-cell">{meat}</td>
        </tr>
        <tr className="table-row">
          <th className="table-header-cell table-cell">매운 단계</th>
          <td className="table-data-cell table-cell">{spice_level}단계</td>
        </tr>
        <tr className="table-row product-allergy">
          <th className="table-header-cell table-cell">알러지</th>
          <td className="table-data-cell table-cell">{allergy}</td>
        </tr>
        <tr className="table-row product-allergy">
          <th className="table-header-cell table-cell">베지테리언</th>
          <td className="table-data-cell table-cell">{`${
            vegetarian === 'yes' ? 'YES' : 'NO'
          }`}</td>
        </tr>
        <tr className="table-row">
          <th className="table-header-cell table-cell">유통기한</th>
          <td className="table-data-cell table-cell">제조일로부터 3개월</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductSummary;
