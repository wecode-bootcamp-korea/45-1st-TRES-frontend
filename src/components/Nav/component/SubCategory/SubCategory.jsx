import React, { useEffect, useState } from 'react';
import './SubCategory.scss';

const SubCategory = () => {
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.78:3000/products/random?from=20&count=40')
      .then(res => res.json())
      .then(data => {
        setSubCategory(data);
      });
  }, []);

  const { mainPage } = subCategory;

  return (
    <div className="subcategory">
      <div className="subcategory-list">
        {subCategory.map(({ id, name, engName }) => {
          return (
            <p className="subcategory-item" key={id}>
              {name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SubCategory;
