import React, { useEffect, useState } from 'react';
import './OptionChecks.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';

const OptionChecks = ({
  url,
  setUrl,
  item: { id, category, type, content },
}) => {
  const [checked, setChecked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  // const navigate = useNavigate();
  // const handleFilter = e => {
  //   if (checked === true) {
  //     searchParams.delete('vegetarian');
  //     setSearchParams(setSearchParams);
  //   } else {
  //     searchParams.set('vegetarian', 'yes');
  //     setSearchParams(searchParams);
  //   }
  //   setChecked(prev => !prev);
  //   // if (category === 'vege') {
  //   //   setUrl(prev => prev + `&${category}=true`);
  //   //   navigate(url + `&${category}=true`);
  //   //   return;
  //   // }
  //   // setUrl(prev => prev + `&${category}=${type}`);
  //   // navigate(url + `&${category}=${type}`);
  // };

  useEffect(() => {
    if (category === 'vegetarian') {
      if (checked === true) {
        searchParams.set('vegetarian', 'yes');
        setSearchParams(searchParams);
      } else {
        searchParams.delete('vegetarian');
        setSearchParams(searchParams);
      }
    } else {
      if (checked === true) {
        searchParams.set(category, id);
        setSearchParams(searchParams);
      } else {
        searchParams.delete(category);
        setSearchParams(searchParams);
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
