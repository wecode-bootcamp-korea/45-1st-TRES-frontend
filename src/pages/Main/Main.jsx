import React from 'react';
import Banner from './component/Banner/Banner';
import World from './component/World/World';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Banner />
      <World />
    </div>
  );
};

export default Main;
