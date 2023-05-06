import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './components/Container/Container';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Login from './pages/Login/Login';
import Empty from './pages/Empty/Empty';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Main />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Login />} />
        <Route path="*" element={<Empty />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
