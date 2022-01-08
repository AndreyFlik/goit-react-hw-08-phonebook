import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./Register.module.css";

import { addNewAccount } from "../../redux/contacts/contscts-operations";

const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewAccount({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h2 className={s.title}>Register Page</h2>
      <div>
        <form onSubmit={handleSubmit} className={s.Wrap}>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChangeName}
              required
            />
          </label>
          <label>
            <span>e-mail</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
              required
            />
          </label>
          <label>
            <span>password</span>
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
              Create new Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
