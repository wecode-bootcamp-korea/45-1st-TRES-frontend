import React from 'react';
import Banner from './component/Banner/Banner';
import WorldCategory from './component/WorldCategory/WorldCategory';
import NewProduct from './component/NewProduct/NewProduct';
import Monthly from './component/Monthly/Monthly';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Banner />
      <div className="main-wrap">
        <WorldCategory />
        <NewProduct />
        <Monthly />
      </div>
    </div>
  );
};

export default Main;
