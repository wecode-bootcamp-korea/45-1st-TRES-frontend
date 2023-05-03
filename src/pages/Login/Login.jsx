import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  // 변수
  const [countries, setCountries] = useState([]); // 국가
  const [inputValues, setInputValues] = useState({
    email: ``,
    firstName: ``,
    lastName: ``,
    password: ``,
    countries: ``,
    pNumber: ``,
    gender: ``,
    birth: ``,
    address: ``,
  });

  // 함수
  const send = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });

    fetch('#', {
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
  useEffect(() => {
    console.log(`국가`, countries);
  }, [countries]);
  useEffect(() => {
    console.log(`전송 변수`, inputValues);
  }, [inputValues]);

  useEffect(() => {
    // 국가 데이터
    fetch(`data/data.json`)
      .then(res => res.json())
      .then(res => setCountries(res));
  }, []);

  // 출력
  return (
    <div className="login">
      <div className="container">
        <span className="text1">Enter your email to join us or sign in.</span>
        <form action="#" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            className="input-email"
            name="email"
            placeholder="Email"
          />
          <div className="email-required" hidden>
            Required
          </div>
          <input
            type="password"
            className="input-password"
            placeholder="password"
            hidden={false}
          />
          <input
            type="password"
            className="input-password-check"
            name="password"
            placeholder="password-check"
          />
          <input
            type="text"
            className="#"
            name="firstName"
            placeholder="firstName"
          />
          <input
            type="text"
            className="#"
            name="lastName"
            placeholder="lastName"
          />
          <input
            type="text"
            className="#"
            name="countries"
            placeholder="countries"
          />
          <input
            type="tel"
            className="#"
            name="pNumber"
            placeholder="pNumber"
          />
          <input type="text" className="#" name="gender" placeholder="gender" />
          <input type="date" className="#" name="birth" placeholder="birth" />
          <input
            type="text"
            className="#"
            name="address"
            placeholder="address"
          />
          <div className="text2" hidden>
            By continuing, I agree to Seke’s Privacy Policy.
          </div>
          <Link to="#">
            <div className="text3">Forgot password?</div>
          </Link>
          {/* <button>Continue</button> */}
          <button onClick={send}>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
