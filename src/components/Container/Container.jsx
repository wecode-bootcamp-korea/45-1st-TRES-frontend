import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Container = () => {
  return (
    <div className="Container">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Container;
