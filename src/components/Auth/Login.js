import React from "react";
import PropTypes from "prop-types";

const Login = (props) => {
  return (
    <div className="login-container">
      <nav className="login">
        <h2>Auth</h2>
        <p>Enter your Github account login and password</p>
        <button className="github" onClick={() => props.authenticate()}>
          Enter
        </button>
      </nav>
    </div>
  );
};

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
