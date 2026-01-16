import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login__form">
          <p className="form__error-message">Error message</p>
          <input
            type="email"
            placeholder="Email"   
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <button type="submit" className="btn primary">
            Sign in
          </button>
        </form>
        <small>You do not have an account? <Link to="/register">Sign up</Link></small>
      </div>
    </section>
  );
};

export default Login;
