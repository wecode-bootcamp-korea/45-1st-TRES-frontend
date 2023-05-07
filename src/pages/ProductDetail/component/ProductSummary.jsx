import React from 'react';
import './ProductSummary.scss';

const ProductSummary = () => {
  return (
    <table className="product-summary">
      <tbody className="table-body">
        <tr className="table-row">
          <th className="table-header-cell table-cell">배송</th>
          <td className="table-data-cell table-cell">
            아침배송23시 전 주문 시 아침 7시 전 도착
          </td>
        </tr>
        <tr className="table-row">
          <th className="table-header-cell table-cell">원산지</th>
          <td className="table-data-cell table-cell">국내산</td>
        </tr>
        <tr className="table-row">
          <th className="table-header-cell table-cell">고기 종류</th>
          <td className="table-data-cell table-cell">돼지고기</td>
        </tr>
        <tr className="table-row">
          <th className="table-header-cell table-cell">매운 단계</th>
          <td className="table-data-cell table-cell">0단계</td>
        </tr>
        <tr className="table-row product-allergy">
          <th className="table-header-cell table-cell">알러지</th>
          <td className="table-data-cell table-cell">땅콩</td>
        </tr>
        <tr className="table-row">
          <th className="table-header-cell table-cell">유통기한</th>
          <td className="table-data-cell table-cell">
            수령일 포함 최소 5일 이상 남은 제품을 보내드립니다.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductSummary;
