import React, { useState } from "react";
import { useDispatch } from "react-redux";

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
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Login;
