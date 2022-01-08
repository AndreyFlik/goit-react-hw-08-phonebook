import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./Login.module.css";

import { loginAccount } from "../../redux/contacts/contscts-operations";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAccount({ email, password }));
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h2 className={s.title}>Login Page</h2>
      <form onSubmit={handleSubmit} className={s.Wrap}>
        <label>
          e-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            required
          />
        </label>
        <label>
          password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
            required
          />
        </label>
        <div>
          <button className={s.UserMenuButton} type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
