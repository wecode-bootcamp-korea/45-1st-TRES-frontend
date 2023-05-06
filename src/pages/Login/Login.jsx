import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.scss';
import useGetFetch from '../../hooks/useGetFetch';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentURL = location.pathname;
  const currentPage =
    currentURL === EMAIL_VERIFICATION_TEXT.url
      ? EMAIL_VERIFICATION_TEXT
      : currentURL === LOGIN_TEXT.url
      ? LOGIN_TEXT
      : JOIN_TEXT;
  const [isEmailExist, setIsEmailExist] = useState(false);
  // const [countries, setCountries] = useState([{ id: 0, country: `선호 국가` }]); // 국가

  const countries = useGetFetch();

  // useEffect(() => {
  //   if (currentPage.url === JOIN_TEXT.url) {
  //     fetch(`/data/list-of-countries.json`)
  //       // fetch(`http://10.58.52.191:3000/users`)
  //       .then(res => res.json())
  //       .then(res => setCountries([...countries, ...res]));
  //   }
  // }, []);

  const [inputValues, setInputValues] = useState({
    email: `Tmdwhd0711!@asefef.com`,
    firstName: `seke`,
    lastName: `we`,
    password: `Tmdwhd0711!`,
    countries: [`가나`, `뉴질랜드`, `세네갈`],
    pNumber: `01011112222`,
    gender: `여자`,
    birth: `2023-05-05`,
    address: `여기`,
  });

  const emailVerification = () => {
    fetch('http://10.58.52.191:3000/users/check', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: ``,
      }),
    })
      .then(res => res.json())
      .then(res =>
        res.isEmailExist ? setIsEmailExist(!isEmailExist) : navigate(`/join`)
      )
      .catch(err => alert(err));
  };

  const login = () => {
    fetch('http://10.58.52.191:3000/users/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: ``,
        password: ``,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('통신실패!');
      })
      .catch(err => console.log(err))
      .then(data => {
        localStorage.setItem('TOKEN', data.accessToken);
        alert('로그인 성공');
      });
  };

  const join = () => {
    // const { name, value } = e.target;
    // setInputValues({ ...inputValues, [name]: value });
    fetch(`http://10.58.52.191:3000/users`, {
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
    })
      .then(res => res.json())
      .then(res => alert(res.message))
      .catch(err => alert(err));
  };

  return (
    <div className="login">
      <div className="container">
        <span className="text1">
          {currentPage === EMAIL_VERIFICATION_TEXT
            ? `${EMAIL_VERIFICATION_TEXT.title}`
            : currentPage === LOGIN_TEXT
            ? `${LOGIN_TEXT.title}`
            : `${JOIN_TEXT.title}`}
        </span>

        <form action="#" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            className="email"
            name="email"
            placeholder="이메일"
          />
          <div className="email-required" hidden>
            Required
          </div>

          {currentPage.url === EMAIL_VERIFICATION_TEXT.url || (
            <input
              type="password"
              className="password"
              placeholder="비밀번호"
            />
          )}

          {currentPage.url === LOGIN_TEXT.url && (
            <Link to="#">
              <div className="text3">Forgot password?</div>
            </Link>
          )}

          {currentPage.url === JOIN_TEXT.url && (
            <>
              <input
                type="password"
                className="password"
                name="password"
                placeholder="비밀번호 확인"
              />
              <input
                type="text"
                className="first-name"
                name="firstName"
                placeholder="이름"
              />
              <input
                type="text"
                className="last-name"
                name="lastName"
                placeholder="성"
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
                placeholder="핸드폰 번호(-제외)"
              />
              <select name="gender" className="gender">
                <option value hidden>
                  성별
                </option>
                <option value="mens">남자</option>
                <option value="womens">여자</option>
              </select>
              <input type="date" className="date" name="birth" />
              <input
                type="text"
                className="address"
                name="address"
                placeholder="기본 배송 주소"
              />
              <div className="text2" hidden>
                By continuing, I agree to Seke’s Privacy Policy.
              </div>
            </>
          )}

          <button
            onClick={
              currentPage.url === EMAIL_VERIFICATION_TEXT.url
                ? emailVerification
                : currentPage.url === LOGIN_TEXT.url
                ? login
                : join
            }
          >
            {currentPage.button}
          </button>
        </form>
      </div>
    </div>
  );
};

const EMAIL_VERIFICATION_TEXT = {
  url: `/email-verification`,
  title: `가입 또는 로그인을 위해 이메일을 입력하세요.`,
  button: `계속`,
};

const LOGIN_TEXT = {
  url: `/login`,
  title: `비밀번호를 입력하세요.`,
  button: `로그인`,
};

const JOIN_TEXT = {
  url: `/join`,
  title: `이제 seké의 멤버가 되어볼까요?`,
  button: `계정 만들기`,
};

export default Login;
