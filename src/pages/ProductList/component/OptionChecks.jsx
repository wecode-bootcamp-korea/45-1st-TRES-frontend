import React, { useState } from 'react';
import './OptionChecks.scss';
import { useNavigate } from 'react-router-dom';

const OptionChecks = ({
  url,
  setUrl,
  item: { id, category, type, content },
}) => {
  const navigate = useNavigate();
  const handleFilter = e => {
    if (category === 'vege') {
      setUrl(prev => prev + `&${category}=true`);
      navigate(url + `&${category}=true`);
      return;
    }
    setUrl(prev => prev + `&${category}=${type}`);
    navigate(url + `&${category}=${type}`);
  };
  return (
    <div className="filter-check" key={id}>
      <input
        className="filter-input"
        type="checkbox"
        id={type}
        name={type}
        onClick={handleFilter}
      />
      <label className="filter-label" htmlFor={type} />
      <label className="label-name" htmlFor={type}>
        {content}
      </label>
    </div>
  );
};

export default OptionChecks;
