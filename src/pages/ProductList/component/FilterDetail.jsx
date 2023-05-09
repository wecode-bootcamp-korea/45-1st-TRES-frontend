import React, { useState } from 'react';
import './FilterDetail.scss';
import OptionChecks from './OptionChecks';
import { useNavigate, useSearchParams } from 'react-router-dom';

const FilterDetail = ({ name, option, url, setUrl }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [level, setLevel] = useState('');
  // const navigate = useNavigate();
  const handleSpiceLevel = e => {
    searchParams.set('spiceLevel', e.target.value);
    setSearchParams(searchParams);
    // if (url.includes(`&spiceLevel=${level}`)) {
    //   setUrl(prev =>
    //     prev.replace(`&spiceLevel=${level}`, `&spiceLevel=${e.target.value}`)
    //   );
    //   navigate(
    //     url.replace(`&spiceLevel=${level}`, `&spiceLevel=${e.target.value}`)
    //   );
    //   setLevel(e.target.value);
    //   return;
    // }
    // setUrl(prev => prev + `&spiceLevel=${e.target.value}`);
    // navigate(url + `&spiceLevel=${e.target.value}`);
    // setLevel(e.target.value);
  };
  return (
    <div className="filter-detail">
      <div className="filter-header">
        <p className="filter-name">{name}</p>
        <img
          className="sort-img"
          alt="더보기"
          src={`/images/icon/${
            isChecked ? 'angle-up-solid' : 'angle-down-solid'
          }.svg`}
          onClick={() => setIsChecked(prev => !prev)}
        />
      </div>
      {isChecked &&
        (option ? (
          option.map(item => (
            <OptionChecks url={url} setUrl={setUrl} key={item.id} item={item} />
          ))
        ) : (
          <div className="filter-check">
            <input
              className="filter-range"
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="3"
              onClick={handleSpiceLevel}
            />
            <label htmlFor="volume" />
          </div>
        ))}
    </div>
  );
};

export default FilterDetail;
