import React, { useState } from "react";
import "./styles.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="container">
        <div className="heading">
          <h2>Login</h2>
          <p>Enter your details below to continue</p>
        </div>
        <form action="" className="form">
          <div className="input">
            <input
              type="email"
              className="input__box"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <input
              type="text"
              className="input__box"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h5 className="checkbox__LS">
              <input type="checkbox" name="" id="" className="checkbox" />
              Remember me
            </h5>
          </div>
          <div className="lowbox__LS">
            <button type="button" className="btn">
              Submit
            </button>
            <p>Don't have any account? Sign up</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
