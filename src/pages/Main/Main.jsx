import React from 'react';
import Banner from './component/Banner/Banner';
import World from './component/World/World';
import New from './component/New/New';
import Monthly from './component/Monthly/Monthly';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Banner />
      <div className="main-wrap">
        <World />
        <New />
        <Monthly />
      </div>
    </div>
  );
};

export default Main;
