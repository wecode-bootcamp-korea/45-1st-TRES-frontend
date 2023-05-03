import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  // Hook
  const location = useLocation();

  const email = `Door1@gmail.com`;
  const password = `tmdwhd0711!`;

  // 변수
  const currentURL = location.pathname;
  const position = currentURL === LOGIN_TEXT.url ? LOGIN_TEXT : JOIN_TEXT; // 현재 위치
  const [countries, setCountries] = useState([{ id: 0, country: `선택` }]); // 국가
  const [inputValues, setInputValues] = useState({
    email: `as@as.com`,
    firstName: `seke`,
    lastName: `we`,
    password: `1234`,
    countries: [`에티오피아`, `탄자니아`, `나이지리아`],
    pNumber: `01011112222`,
    gender: `여자`,
    birth: `2023-05-05`,
    address: `여기`,
  });

  // 함수
  const send = e => {
    const { name, value } = e.target;
    // setInputValues({ ...inputValues, [name]: value });

    fetch('      // fetch(`http://10.58.52.191:3000/join`)', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: inputValues.email,
        firstName: inputValues.firstName,
        lastName: inputValues.lastName,
        password: inputValues.password,
        countries: inputValues.countries,
        pNumber: inputValues.pNumber,
        gender: inputValues.gender,
        birth: inputValues.birth,
        address: inputValues.address,
      }),
    }).then(req => console.log(`전송`, req.json()));
    // .then(res => res.json());
    // .then(res => console.log(res));
  };

  // 동작
  // useEffect(() => {
  //   console.log(`국가`, countries);
  // }, [countries]);
  // useEffect(() => {
  //   console.log(`전송 변수`, inputValues);
  // }, [inputValues]);

  useEffect(() => {
    // 국가 데이터
    // fetch(`data/data.json`)
    // fetch(`http://10.58.52.191:3000/join`)
    //   .then(res => res.json())
    //   .then(res => setCountries([...countries, ...res]));
  }, []);

  const signIn = () => {
    fetch('http://10.58.52.191:3000/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('통신실패!');
      })
      // .then(res => console.log(`z`, res))
      .catch(err => console.log(err))
      .then(data => {
        localStorage.setItem('TOKEN', data.accessToken);
        alert('로그인 성공');
      });
  };

  // 출력
  return (
    <div className="login">
      <div className="container">
        <span className="text1">
          Enter your email to{' '}
          {position === LOGIN_TEXT
            ? `${LOGIN_TEXT.title} us`
            : `${JOIN_TEXT.title} in`}
          .
        </span>
        <form action="#" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            className="email"
            name="email"
            placeholder="Email"
          />
          <div className="email-required" hidden>
            Required
          </div>
          <input type="password" className="password" placeholder="Password" />
          {position.url === LOGIN_TEXT.url || (
            <>
              <input
                type="password"
                className="password"
                name="password"
                placeholder="Password Check"
              />
              <input
                type="text"
                className="first-name"
                name="firstName"
                placeholder="First Name"
              />
              <input
                type="text"
                className="last-name"
                name="lastName"
                placeholder="Last Name"
              />
              <select name="countries">
                {countries.map(item => (
                  <option key={item.id} value={item.country}>
                    {item.country}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                className="pNumber"
                name="pNumber"
                placeholder="Phone Number"
              />
              <input
                type="text"
                className="gender"
                name="gender"
                placeholder="gender"
              />
              <select name="gender" className="gender">
                <option value hidden>
                  Shopping Preference
                </option>
                <option value="mens">남자</option>
                <option value="womens">여자</option>
              </select>
              <input
                type="date"
                className="date"
                name="birth"
                placeholder="Date of Birth"
              />
              <input
                type="text"
                className="address"
                name="address"
                placeholder="address"
              />
              <div className="text2" hidden>
                By continuing, I agree to Seke’s Privacy Policy.
              </div>
              <Link to="#">
                <div className="text3">Forgot password?</div>
              </Link>
            </>
          )}
          {/* <button>Continue</button> */}
          <button onClick={signIn}>
            {position.url === LOGIN_TEXT.url
              ? LOGIN_TEXT.title
              : JOIN_TEXT.title}
          </button>
        </form>
      </div>
    </div>
  );
};

// 상수 데이터
const LOGIN_TEXT = {
  url: '/login',
  title: 'Sign In',
};

const JOIN_TEXT = {
  url: '/join',
  title: 'Create Account',
};

export default Login;
