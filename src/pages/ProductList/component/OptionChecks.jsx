import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './OptionChecks.scss';

const OptionChecks = ({ item: { id, category, type, content } }) => {
  const [checked, setChecked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (category === 'vegetarian') {
      if (checked === true) {
        searchParams.set('vegetarian', `"yes"`);
        setSearchParams(searchParams);
      } else {
        searchParams.delete('vegetarian');
        setSearchParams(searchParams);
      }
    } else {
      if (checked === true) {
        searchParams.append(category, id);
        setSearchParams(searchParams);
      } else {
        let deletedParams = searchParams.toString();
        deletedParams = deletedParams.split('&');
        deletedParams = deletedParams
          .filter(param => param !== `${category}=${id}`)
          .join('&');
        setSearchParams(deletedParams);
      }
    }
  }, [checked]);

  return (
    <div className="filter-check" key={id}>
      <input
        className="filter-input"
        type="checkbox"
        id={type}
        name={type}
        checked={checked}
        onChange={() => setChecked(prev => !prev)}
      />
      <label className="filter-label" htmlFor={type} />
      <label className="label-name" htmlFor={type}>
        {content}
      </label>
    </div>
  );
};

export default OptionChecks;
