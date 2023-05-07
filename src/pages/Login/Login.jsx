import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const login = e => {
    e.preventDefault();
    fetch('http://10.58.52.203:3000/users/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
      }),
    })
      .then(res => {
        if (res.ok) return res.json();
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
        <span className="login-text">
          로그인을 위해 이메일과 비밀번호를 입력하세요.
        </span>

        <form className="form" onSubmit={login}>
          <input
            type="text"
            className="input email"
            name="email"
            placeholder="Email"
            onChange={handleInput}
          />

          <input
            type="password"
            className="input password"
            name="password"
            placeholder="Password"
            onChange={handleInput}
          />

          <button className="submit-button">로그인</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
