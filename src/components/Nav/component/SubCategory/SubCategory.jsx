import React, { useEffect, useState } from 'react';
import './SubCategory.scss';

const SubCategory = () => {
  const [subCategory, setSubCategory] = useState();

  useEffect(() => {
    fetch('/data/main-continent-data.json')
      .then(res => res.json())
      .then(data => {
        setSubCategory(data);
      });
  }, []);

  if (!subCategory) return;
  return (
    <div className="sub-category">
      <div className="sub-category-box">
        {subCategory.map(({ id, name, engName }) => {
          return (
            <p className="sub-category-item" key={id}>
              {name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SubCategory;
