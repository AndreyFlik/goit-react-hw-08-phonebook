import React, { useState } from "react";
import PropTypes from "prop-types";

import s from "./Form.module.css";

const Form = ({ addList }) => {
  // state = {
  //   name: "",
  //   number: "",
  // };
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeContact = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addList({ name, number });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.formWrap}>
      <label className={s.labelStile}>
        <p>Name</p>
        <input
          className={s.inputStile}
          onChange={handleChangeName}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.labelStile}>
        <p>Number</p>
        <input
          className={s.inputStile}
          onChange={handleChangeContact}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

Form.propTypes = {
  addList: PropTypes.func,
};

export default Form;
