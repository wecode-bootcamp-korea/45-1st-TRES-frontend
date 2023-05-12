import React from 'react';
import Login from '../Login';
import Main from '../../Main/Main';

const IsLogin = () => {
  const token = localStorage.getItem('TOKEN');
  if (token) alert(`이미 로그인 되어 있습니다`);

  return <div className="is-login">{token ? <Main /> : <Login />}</div>;
};

export default IsLogin;
