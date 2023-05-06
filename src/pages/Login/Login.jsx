import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  /* Hook */
  const location = useLocation();
  const navigate = useNavigate();

  /* 임시 전송용 변수 */
  const [email, setEmail] = useState(`DoorWinBell0004@gmail.com`);
  const [password, setPassword] = useState(`Tmdwhd0711!`);

  /* 변수 */
  const currentURL = location.pathname; // 현재 페이지
  const position =
    currentURL === EMAIL_VERIFICATION_TEXT.url
      ? EMAIL_VERIFICATION_TEXT
      : currentURL === LOGIN_TEXT.url
      ? LOGIN_TEXT
      : JOIN_TEXT; // 현재 위치
  const [isEmailExist, setIsEmailExist] = useState(false); // 이메일 중복 체크 결과
  const [countries, setCountries] = useState([{ id: 0, country: `선택` }]); // 국가
  // 회원가입 전송
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

  /* 입력 */
  const inputEmail = e => {
    setEmail(e.target.value);
  };

  const inputPassword = e => {
    setPassword(e.target.value);
  };

  /* 함수 */
  // 이메일 중복 확인
  const checkEmail = () => {
    fetch('http://10.58.52.191:3000/users/check', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then(res => res.json())
      .then(res =>
        res.isEmailExist ? setIsEmailExist(!isEmailExist) : navigate(`/join`)
      )
      .catch(err => alert(err));
  };

  // 로그인
  const signIn = () => {
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

  // 회원가입 요청
  const send = () => {
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
    fetch(`http://10.58.52.191:3000/users`)
      .then(res => res.json())
      .then(res => setCountries([...countries, ...res]));
  }, []);

  // 출력
  return (
    <div className="login">
      <div className="container">
        {/* 상위 문구 */}
        <span className="text1">
          {position === EMAIL_VERIFICATION_TEXT
            ? `${EMAIL_VERIFICATION_TEXT.title}`
            : position === LOGIN_TEXT
            ? `${LOGIN_TEXT.title}`
            : `${JOIN_TEXT.title}`}
        </span>

        {/* 입력 폼 */}
        <form action="#" onSubmit={e => e.preventDefault()}>
          {/* 이메일 입력 */}
          <input
            type="text"
            className="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={inputEmail}
          />
          <div className="email-required" hidden>
            Required
          </div>

          {/* 비밀번호 입력 */}
          <input
            type="password"
            className="password"
            value={password}
            placeholder="Password"
            onChange={inputPassword}
            hidden={!isEmailExist}
          />

          {/* 회원가입 */}
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
          {/* <button onClick={send}> */}
          <button onClick={checkEmail}>
            {/* <button onClick={signIn}> */}
            {position.button}
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
