import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element="main" />
        <Route path="*" element="없는 페이지" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
