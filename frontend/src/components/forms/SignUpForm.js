import React from "react";

const SignUpForm = () => {
  return (
    <div className="columns is-centered is-vcentered login-base">
      <div className="column is-5">
        <div className="card">
          <div className="card-content">
            <h1 className="title login-title">Sign Up</h1>
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
            <button className="button">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
