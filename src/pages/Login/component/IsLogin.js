import React, { useEffect } from 'react';
import Login from '../Login';
import { useNavigate } from 'react-router-dom';

const IsLogin = () => {
  const token = localStorage.getItem('TOKEN');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      alert(`이미 로그인 되어 있습니다`);
      navigate(`/`);
    }
  });

  return !token && <Login />;
};

export default IsLogin;
