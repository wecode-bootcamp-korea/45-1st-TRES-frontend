import React from 'react';
import './Filter.scss';
import FilterDetail from './FilterDetail';

const Filter = ({ url, setUrl }) => {
  return (
    <div className="filter">
      <ul className="country">
        {COUNTRY.map(({ id, name }) => (
          <li className="country-list" key={id}>
            <span>{name}</span>
          </li>
        ))}
      </ul>
      {FILTER_TITLE.map(title => (
        <FilterDetail
          key={title.id}
          url={url}
          setUrl={setUrl}
          name={title.name}
          option={title.option}
        />
      ))}
      {/* <FilterDetail
        url={url}
        setUrl={setUrl}
        name="채식"
        option={VEGE_OPTION}
      />
      <FilterDetail
        url={url}
        setUrl={setUrl}
        name="고기"
        option={MEAT_OPTION}
      />
      <FilterDetail
        url={url}
        setUrl={setUrl}
        name="알러지"
        option={ALLERGY_OPTION}
      />
      <FilterDetail url={url} setUrl={setUrl} name="맵기" /> */}
    </div>
  );
};

export default Filter;

const VEGE_OPTION = [
  { id: 0, category: 'vegetarian', type: 'vegetarian', content: '채식주의자' },
];
const MEAT_OPTION = [
  { id: 1, category: `meatId1`, type: 'cow', content: '소' },
  { id: 2, category: `meatId2`, type: 'pig', content: '돼지' },
  { id: 3, category: `meatId3`, type: 'sheep', content: '양' },
  { id: 4, category: `meatId4`, type: 'chicken', content: '닭' },
];
const ALLERGY_OPTION = [
  { id: 1, category: 'allergyId1', type: 'milk', content: '우유' },
  { id: 2, category: 'allergyId2', type: 'peanut', content: '땅통' },
  { id: 3, category: 'allergyId3', type: 'egg', content: '계란' },
];
const COUNTRY = [
  { id: 1, name: '한국' },
  { id: 2, name: '중국' },
  { id: 3, name: '일본' },
];

const FILTER_TITLE = [
  { id: 0, name: '채식', option: VEGE_OPTION },
  { id: 1, name: '고기', option: MEAT_OPTION },
  { id: 2, name: '알러지', option: ALLERGY_OPTION },
  { id: 3, name: '맵기' },
];
