import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

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
      .then(res => {
        if (res.ok) res.json();
        throw new Error('통신실패!');
      })
      .catch(err => alert(`로그인 실패 ${err}`))
      .then(res => {
        localStorage.setItem('TOKEN', res.accessToken);
        navigate('/');
      });
  };

  return (
    <div className="login">
      <div className="container">
        <span className="login-text">로그인</span>

        <form className="form" action="#" onSubmit={login}>
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

          <button className="submit-button">로그인</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
