import React, { useEffect, useState } from 'react';
import './SubCategory.scss';

const SubCategory = () => {
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    fetch('/data/main-continent-data.json')
      .then(res => res.json())
      .then(data => {
        setSubCategory(data);
      });
  }, []);

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
