import React from "react";
import { Link } from "react-router-dom";

const LoginForm = props => {
  return (
    <div className="columns is-centered is-vcentered login-base">
      <div className="column is-5">
        <div className="card">
          <div className="card-content">
            <h1 className="title login-title">Login</h1>
            <div className="field">
              <p className="control has-icons-left has-icons-right bd-notification">
                <input className="input" type="email" placeholder="Email" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"/>
                </span>
                <span className="icon is-small is-right"/>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left bd-notification">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
            <button className="button">Login</button>
            <p className="sign-up-link">
              Don't Have an Account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
