import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const LoginTemporary = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(`DoorWinBell0004@gmail.com`);
  const [password, setPassword] = useState(`Tmdwhd0711!`);

  const inputEmail = e => {
    setEmail(e.target.value);
  };

  const inputPassword = e => {
    setPassword(e.target.value);
  };

  const login = () => {
    fetch('http://10.58.52.191:3000/users/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => localStorage.setItem('TOKEN', res.accessToken))
      .then(() => navigate('/'))
      .catch(err => alert(`로그인 실패! ${err}`));
  };

  return (
    <div className="login">
      <div className="container">
        <span className="login-text">로그인</span>

        <form className="form" action="#" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            className="input email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={inputEmail}
          />

          <input
            type="password"
            className="input password"
            value={password}
            placeholder="Password"
            onChange={inputPassword}
          />

          <button className="submit-button" onClick={login}>
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginTemporary;
