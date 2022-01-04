import React, { useState } from "react";
import { useDispatch } from "react-redux";

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
    <div>
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            required
          />
        </label>
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
        <button type="submit">Create new Account</button>
      </form>
    </div>
  );
};

export default Register;
