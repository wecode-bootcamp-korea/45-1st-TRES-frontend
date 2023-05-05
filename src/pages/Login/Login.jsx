import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  /* Hook */
  const navigate = useNavigate();

  /* 로그인 임시 변수 */
  const [email, setEmail] = useState(`DoorWinBell0004@gmail.com`);
  const [password, setPassword] = useState(`Tmdwhd0711!`);

  /* 함수 */
  // 입력
  const inputEmail = e => {
    setEmail(e.target.value);
  };

  const inputPassword = e => {
    setPassword(e.target.value);
  };

  // 로그인
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
      .catch(err => alert(`로그인 실패ㅜ ${err}`));
  };

  // 출력
  return (
    <div className="login">
      <div className="container">
        {/* 상위 문구 */}
        <span className="login-text">로그인</span>

        {/* 입력 폼 */}
        <form className="form" action="#" onSubmit={e => e.preventDefault()}>
          {/* 이메일 입력 */}
          <input
            type="text"
            className="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={inputEmail}
          />

          {/* 비밀번호 입력 */}
          <input
            type="password"
            className="password"
            value={password}
            placeholder="Password"
            onChange={inputPassword}
          />

          {/* 로그인 */}
          <button onClick={login}>로그인</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
