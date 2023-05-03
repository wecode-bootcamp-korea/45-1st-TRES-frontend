import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <span className="text1">Enter your email to join us or sign in.</span>
        <form action="#" onSubmit={e => e.preventDefault()}>
          <input type="email" className="input-email" placeholder="Email" />
          <div className="email-required" hidden>
            Required
          </div>
          <input
            type="password"
            className="input-password"
            placeholder="password"
          />
          <div className="text2" hidden>
            By continuing, I agree to Seke’s Privacy Policy.
          </div>
          <Link to="#">
            <div className="text3">Forgot password?</div>
          </Link>
          <button>Continue</button>
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
