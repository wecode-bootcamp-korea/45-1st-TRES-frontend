import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  COUNTRIES_API,
  EMAIL_VERIFICATION_API,
  JOIN_API,
  LOGIN_API,
} from '../../config';
import useGetFetch from '../../hooks/useGetFetch';
import './Login.scss';

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
  const countries = useGetFetch(`/data/list-of-countries.json`);
  // const countries = useGetFetch(`${COUNTRIES_API}`);

  // 필수
  const [passwordRequired, setPasswordRequired] = useState(``);
  const [passwordEqualRequired, setPasswordEqualRequired] = useState(``);
  const [firstNameRequired, setFirstNameRequired] = useState(``);
  const [lastNameRequired, setLastNameRequired] = useState(``);
  const [genderRequired, setGenderRequired] = useState(``);
  const [phoneNumberRequired, setPhoneNumberRequired] = useState(``);
  const [addressRequired, setAddressRequired] = useState(``);
  const [isShowCountriesList, setIsShowCountriesList] = useState(false);

  // Checkbox
  const [agreementCheckbox, setAgreementCheckbox] = useState([]);
  console.log(agreementCheckbox);
  const checkAll = checked =>
    checked
      ? setAgreementCheckbox(AGREEMENT_CHECKBOX.map(item => item.id))
      : setAgreementCheckbox([]);

  const checkSingle = (checked, id) =>
    checked
      ? setAgreementCheckbox(prev => [...prev, id])
      : setAgreementCheckbox(agreementCheckbox.filter(item => item !== id));

  // 계산된 속성명
  const [inputValues, setInputValues] = useState({
    email: ``,
    password: ``,
    passwordEqual: ``,
    firstName: ``,
    lastName: ``,
    gender: ``,
    phoneNumber: ``,
    birth: ``,
    address: ``,
  });

  const [gender, setGender] = useState(``);
  const inputGender = e => {
    setGender(e.target.value);
  };

  /* 유효성 검사 */
  const [emailRegex, setEmailRegex] = useState(``);
  const [passwordRegex, setPasswordRegex] = useState(``);
  const [PasswordEqualText, setIsPasswordEqualtext] = useState(``);
  const [phoneNumberRegex, setPhoneNumberRegex] = useState(``);

  // onChange
  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });

    if (name === `email`) {
      let emailCheckText = /^[a-z]{2,}@[a-z]{2,}.[a-z]{2,}$/;
      setEmailRegex(
        emailCheckText.test(value) ||
          `이메일 형식을 확인해주세요 (영어 소문자, 2글자@2글자.2글자)`
      );
    }

    if (name === `password`) {
      let passwordCheckText =
        /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/;

      setPasswordRegex(
        passwordCheckText.test(value) ||
          `비밀번호 형식을 확인해주세요
        (8자이상, 대소문자, 숫자, 특수문자 1개이상)`
      );

      setIsPasswordEqualtext(
        e.target.value === inputValues.passwordEqual
          ? ``
          : `비밀번호가 일치하지 않습니다`
      );

      setPasswordRequired(!value.length ? `필수` : ``);
    }

    if (name === `passwordEqual`) {
      setIsPasswordEqualtext(
        e.target.value === inputValues.password
          ? ``
          : `비밀번호가 일치하지 않습니다`
      );

      setPasswordEqualRequired(!value.length ? `필수` : ``);
    }

    if (name === `firstName`) {
      setFirstNameRequired(!value.length ? `필수` : ``);
    }

    if (name === `lastName`) {
      setLastNameRequired(!value.length ? `필수` : ``);
    }

    if (name === `gender`) {
      setGenderRequired(!value.length ? `필수` : ``);
    }

    if (name === `phoneNumber`) {
      let phoneNumberCheckText = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;
      setPhoneNumberRegex(
        phoneNumberCheckText.test(value) ||
          `전화번호 형식을 확인해주세요 (-제외, 10~11숫자)`
      );

      setPhoneNumberRequired(!value.length ? `필수` : ``);
    }

    if (name === `address`) {
      setAddressRequired(!value.length ? `필수` : ``);
    }
  };

  // 버튼 열림
  const isOpenButton =
    currentPage.url === EMAIL_VERIFICATION_TEXT.url
      ? emailRegex === true
      : currentPage.url === LOGIN_TEXT.url
      ? emailRegex === true && passwordRegex === true
      : currentPage.url === JOIN_TEXT.url
      ? emailRegex === true &&
        passwordRegex === true &&
        inputValues.password === inputValues.passwordEqual &&
        inputValues.firstName.length &&
        inputValues.lastName.length &&
        (gender === '남자' || gender === '여자') &&
        phoneNumberRegex === true &&
        inputValues.address.length &&
        agreementCheckbox.includes(1) &&
        agreementCheckbox.includes(2)
      : ``;

  // input 항목
  const [checkCountries, setCheckCountries] = useState([]);
  const checkCountry = (checked, country) =>
    checked
      ? checkCountries.length < 3 &&
        setCheckCountries(prev => [...prev, country])
      : setCheckCountries(checkCountries.filter(item => item !== country));

  /* 함수 */
  // 국가 선택
  const showCountriesList = () => {
    setIsShowCountriesList(prev => !prev);
  };

  // 이메일 확인
  const emailVerification = e => {
    e.preventDefault();
    fetch(`${EMAIL_VERIFICATION_API}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputValues.emaile,
      }),
    })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('통신실패!');
      })
      .catch(err => alert(err))
      .then(res => (res.isEmailExist ? navigate(`/login`) : navigate(`/join`)));
  };

  // 로그인
  const login = e => {
    e.preventDefault();
    fetch(`${LOGIN_API}`, {
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

  // 회원가입
  const join = e => {
    e.preventDefault();
    // fetch(`${JOIN_API}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify({
    // email: inputValues.email,
    // password: inputValues.password,
    // firstName: inputValues.firstName,
    // lastName: inputValues.lastName,
    // gender: gender,
    // phoneNumber: inputValues.phoneNumber,
    // birth: inputValues.birth,
    // countries: checkCountries,
    // address: ainputValues.address,
    //   }),
    // })
    //   .then(res => {
    //     if (res.ok) return res.json();
    //     throw new Error('통신실패!');
    //   })
    //   .catch(err => alert(`회원가입 실패 ${err}`))
    //   .then(res => {
    //     localStorage.setItem('TOKEN', res.accessToken);
    //     navigate('/');
    //   });
  };

  /* 출력 */
  return (
    <div className="login">
      <div className={isShowCountriesList ? `modal-background-color` : ``} />
      <div className="container">
        <span className="page-description-text">
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
              onChange={handleInput}
              placeholder="이메일"
              // disabled={currentPage.url !== EMAIL_VERIFICATION_TEXT.url}
            />
            {emailRegex}
          </div>

          {currentPage.url === EMAIL_VERIFICATION_TEXT.url || (
            <div className="input-box">
              <input
                type="password"
                className="input password"
                name="password"
                onChange={handleInput}
                placeholder="비밀번호"
              />
              <div className="required-text">{passwordRequired}</div>
              {passwordRegex}
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
                  name="passwordEqual"
                  onChange={handleInput}
                  placeholder="비밀번호 확인"
                />
                <div className="required-text">{passwordEqualRequired}</div>
                <div>{PasswordEqualText}</div>
              </div>

              <div className="input-box first-name">
                <input
                  type="text"
                  className="input"
                  name="firstName"
                  onChange={handleInput}
                  placeholder="이름"
                />
                <div className="required-text">{firstNameRequired}</div>
              </div>

              <div className="input-box last-name">
                <input
                  type="text"
                  className="input"
                  name="lastName"
                  onChange={handleInput}
                  placeholder="성"
                />
                <div className="required-text">{lastNameRequired}</div>
              </div>

              <div className="input-box gender">
                <select className="input" name="gender" onChange={inputGender}>
                  <option value hidden>
                    성별
                  </option>
                  <option value="남자">남자</option>
                  <option value="여자">여자</option>
                </select>
                <div className="required-text">{genderRequired}</div>
              </div>

              <div className="input-box">
                <input
                  type="text"
                  className="input pNumber"
                  name="phoneNumber"
                  onChange={handleInput}
                  placeholder="핸드폰 번호(-제외)"
                />
                <div className="required-text">{phoneNumberRequired}</div>
                <div>{phoneNumberRegex}</div>
              </div>

              <div className="input-box">
                <input
                  type="date"
                  className="input date"
                  name="birth"
                  onChange={handleInput}
                />
              </div>

              <div className="select-countries-box">
                <button
                  className="select-countries-button"
                  onClick={showCountriesList}
                >
                  선호 국가 선택
                </button>
                {checkCountries.sort().map((item, i) => (
                  <span key={i}>
                    {item}
                    {checkCountries.length - 1 !== i && `, `}
                  </span>
                ))}
              </div>

              <div
                className={`select-countries-modal ${
                  isShowCountriesList || 'display-none'
                }`}
              >
                <div className="countries-list">
                  <div>
                    {countries?.map(item => (
                      <div key={item.id} className="country">
                        <input
                          type="checkbox"
                          onChange={e =>
                            checkCountry(e.target.checked, item.country)
                          }
                          checked={checkCountries.includes(item.country)}
                        />
                        <span>{item.country}</span>
                      </div>
                    ))}
                  </div>
                  <div className="close-modal-button">
                    <span>최대 {checkCountries.length}/3개</span>
                    <button onClick={showCountriesList}>확인</button>
                  </div>
                </div>
              </div>

              <div className="input-box">
                <input
                  type="text"
                  className="input address"
                  name="address"
                  onChange={handleInput}
                  placeholder="기본 배송 주소"
                />
                <div className="required-text">{addressRequired}</div>
              </div>

              <div className="agreement-box">
                <ul className="agreement-checkbox">
                  <li
                    className={`${
                      agreementCheckbox.includes(1) &&
                      agreementCheckbox.includes(2) &&
                      agreementCheckbox.includes(3)
                        ? 'font-color-black'
                        : ''
                    }`}
                  >
                    <input
                      type="checkbox"
                      onChange={e => checkAll(e.target.checked)}
                      checked={
                        agreementCheckbox.length === AGREEMENT_CHECKBOX.length
                      }
                    />
                    <span>전체 동의합니다.</span>
                    <div className="tab">
                      선택항목에 동의하지 않는 경우도 회원가입 및 일반적인
                      서비스를 이용할 수 있습니다.
                    </div>
                  </li>
                  <li>
                    <ul>
                      {AGREEMENT_CHECKBOX.map((item, i) => (
                        <li
                          key={item.id}
                          className={`${
                            agreementCheckbox.includes(i + 1)
                              ? 'font-color-black'
                              : 'z'
                          }`}
                        >
                          {console.log(`index`, i)}
                          <input
                            type="checkbox"
                            onChange={e =>
                              checkSingle(e.target.checked, item.id)
                            }
                            checked={agreementCheckbox.includes(item.id)}
                          />
                          <span>{item.text} </span>
                          <span>{item.required}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </>
          )}
          <button
            className={`${
              isOpenButton ? `open-button-color` : `close-button-color`
            } submit-button`}
            disabled={!isOpenButton}
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
