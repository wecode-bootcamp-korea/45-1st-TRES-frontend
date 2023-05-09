import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.scss';
import useGetFetch from '../../hooks/useGetFetch';

const Login = () => {
  /* 변수 */
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage =
    location.pathname === EMAIL_VERIFICATION_TEXT.url
      ? EMAIL_VERIFICATION_TEXT
      : location.pathname === LOGIN_TEXT.url
      ? LOGIN_TEXT
      : JOIN_TEXT;
  // const countries = useGetFetch(`/data/list-of-countries.json`);
  const countries = useGetFetch(`http://10.58.52.249:3000/users`);

  // Checkbox
  const [checkItems, setCheckItems] = useState([]);
  const checkAll = checked =>
    checked
      ? setCheckItems(AGREEMENT_CHECKBOX.map(item => item.id))
      : setCheckItems([]);

  const checkSingle = (checked, id) =>
    checked
      ? setCheckItems(prev => [...prev, id])
      : setCheckItems(checkItems.filter(item => item !== id));

  // input 항목
  const emailRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const passwordRef = useRef(null);
  const genderRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const addressRef = useRef(null);
  const birthRef = useRef(null);
  const [checkCountries, setCheckCountries] = useState([]);
  const checkCountry = (checked, country) =>
    checked
      ? setCheckCountries(prev => [...prev, country])
      : setCheckCountries(checkCountries.filter(item => item !== country));

  /* 함수 */
  // 이메일 확인
  const emailVerification = e => {
    e.preventDefault();
    fetch('http://10.58.52.249:3000/users/email-check', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailRef.current.value,
      }),
    })
      .then(res => {
        console.log(`res`, res);
        if (res.ok) return res.json();
        throw new Error('통신실패!');
      })
      .then(res => (res.isEmailExist ? navigate(`/login`) : navigate(`/join`)))
      .catch(err => alert(err));
  };

  // 로그인
  const login = e => {
    e.preventDefault();
    fetch('http://10.58.52.249:3000/users/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
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

  // 회원가입
  const join = e => {
    e.preventDefault();

    console.log(`email: `, emailRef.current.value);
    console.log(`password: `, passwordRef.current.value);
    console.log(`firstName: `, firstNameRef.current.value);
    console.log(`lastName: `, lastNameRef.current.value);
    console.log(`gender: `, genderRef.current.value);
    console.log(`phoneNumber: `, phoneNumberRef.current.value);
    console.log(`birth: `, birthRef.current.value);
    console.log(`countries: `, checkCountries);
    console.log(`address: `, addressRef.current.value);

    fetch(`http://10.58.52.249:3000/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        password: passwordRef.current.value,
        gender: genderRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        birth: birthRef.current.value,
        countries: checkCountries,
        address: addressRef.current.value,
      }),
    })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('통신실패!');
      })
      .catch(err => alert(`회원가입 실패 ${err}`))
      .then(res => {
        localStorage.setItem('TOKEN', res.accessToken);
        navigate('/');
      });
  };

  /* 출력 */
  return (
    <div className="login">
      <div className="container">
        <span className="text-page-description">
          {currentPage === EMAIL_VERIFICATION_TEXT
            ? `${EMAIL_VERIFICATION_TEXT.title}`
            : currentPage === LOGIN_TEXT
            ? `${LOGIN_TEXT.title}`
            : `${JOIN_TEXT.title}`}
        </span>

        <form
          className="form"
          action="#"
          onSubmit={
            currentPage.url === EMAIL_VERIFICATION_TEXT.url
              ? emailVerification
              : currentPage.url === LOGIN_TEXT.url
              ? login
              : join
          }
        >
          <div className="input-box">
            <input
              type="text"
              className="input email"
              name="email"
              ref={emailRef}
              placeholder="이메일"
              disabled={currentPage.url !== EMAIL_VERIFICATION_TEXT.url}
            />
          </div>
          {currentPage.url === EMAIL_VERIFICATION_TEXT.url || (
            <div className="input-box">
              <input
                type="password"
                className="input password"
                ref={passwordRef}
                placeholder="비밀번호"
              />
              <div className="text-required">필수</div>
            </div>
          )}
          {currentPage.url === LOGIN_TEXT.url && (
            <Link to="#">
              <div className="find-password-text">비밀번호 찾기</div>
            </Link>
          )}
          {currentPage.url === JOIN_TEXT.url && (
            <>
              <div className="input-box">
                <input
                  type="password"
                  className="input password"
                  placeholder="비밀번호 확인"
                />
                <div className="text-required">필수</div>
              </div>

              <div className="input-box first-name">
                <input
                  type="text"
                  className="input"
                  ref={firstNameRef}
                  placeholder="이름"
                />
                <div className="text-required">필수</div>
              </div>

              <div className="input-box last-name">
                <input
                  type="text"
                  className="input"
                  ref={lastNameRef}
                  placeholder="성"
                />
                <div className="text-required">필수</div>
              </div>

              <div className="input-box gender">
                <select className="input" ref={genderRef}>
                  <option value hidden>
                    성별
                  </option>
                  <option value="남자">남자</option>
                  <option value="여자">여자</option>
                </select>
                <div className="text-required">필수</div>
              </div>

              <div className="input-box">
                <input
                  type="tel"
                  className="input pNumber"
                  ref={phoneNumberRef}
                  placeholder="핸드폰 번호(-제외)"
                />
                <div className="text-required">필수</div>
              </div>

              <div className="input-box">
                <input type="date" className="input date" ref={birthRef} />
              </div>

              <div className="input-box">
                {countries?.map(item => (
                  <div key={item.id}>
                    <input
                      type="checkbox"
                      // value={item.country}
                      onChange={e =>
                        checkCountry(e.target.checked, item.country)
                      }
                      checked={checkCountries.includes(item.country)}
                    />
                    <span>{item.country}</span>
                  </div>
                ))}
                {/* <select className="input" ref={countriesRef}>
                  <option value hidden>
                    선호 국가
                  </option>
                  {countries?.map(item => (
                    <option key={item.id} value={item.country}>
                      {item.country}
                    </option>
                  ))}
                </select> */}
              </div>

              <div className="input-box">
                <input
                  type="text"
                  className="input address"
                  ref={addressRef}
                  placeholder="기본 배송 주소"
                />
                <div className="text-required">필수</div>
              </div>

              <div className="agreement-box">
                <div className="checkbox-agreement">
                  <input
                    type="checkbox"
                    onChange={e => checkAll(e.target.checked)}
                    checked={checkItems.length === AGREEMENT_CHECKBOX.length}
                  />
                  <span>전체 동의합니다.</span>
                  <div>
                    선택항목에 동의하지 않는 경우도 회원가입 및 일반적인
                    서비스를 이용할 수 있습니다.
                  </div>
                </div>

                <div>
                  {AGREEMENT_CHECKBOX.map(item => (
                    <div key={item.id} className="checkbox-agreement">
                      <input
                        type="checkbox"
                        onChange={e => checkSingle(e.target.checked, item.id)}
                        checked={checkItems.includes(item.id)}
                      />
                      <span>{item.text} </span>
                      <span>{item.required}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          <button
            className={`${
              1 + 2 === 3 ? `open-button-color` : `close-button-color`
            } submit-button`}
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

const AGREEMENT_CHECKBOX = [
  { id: 1, text: `이용약관 동의`, required: `(필수)` },
  { id: 2, text: `개인정보 수집∙이용 동의`, required: `(필수)` },
  { id: 3, text: `개인정보 수집∙이용 동의`, required: `(선택)` },
];

export default Login;
