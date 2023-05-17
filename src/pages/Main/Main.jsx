import React, { useEffect, useState } from 'react';
import Banner from './component/Banner/Banner';
import WorldCategory from './component/WorldCategory/WorldCategory';
import NewProduct from './component/NewProduct/NewProduct';
import Monthly from './component/Monthly/Monthly';
import './Main.scss';

const Main = () => {
  const [mainList, setMainList] = useState([]);

  useEffect(() => {
    fetch('http://13.125.231.183:3000/products/random?from=20&count=40')
      .then(res => res.json())
      .then(data => {
        setMainList(data);
      });
  }, []);

  const { mainPage } = mainList;

  return (
    <div className="main">
      <Banner />
      <div className="main-wrap">
        <WorldCategory />
        <NewProduct mainPage={mainPage} />
        <Monthly mainPage={mainPage} />
      </div>
    </div>
  );
};

export default Main;
