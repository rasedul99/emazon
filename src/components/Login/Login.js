import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  const [signInWithEmailAndPassword, user, error, loading] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigator("/shop");
  }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
            />
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p style={{ color: "red" }}>Error: {error?.message}</p>
        {loading && <p>Loading...</p>}
        <p>
          New to Ema-John?{" "}
          <Link to="/signup" className="form-link">
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
