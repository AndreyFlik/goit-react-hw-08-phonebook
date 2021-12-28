import React, { useEffect } from "react";
// import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

import {
  getContacts,
  addNewContacts,
  newDelContact,
  changeFilter,
} from "../../redux/contacts/contscts-operations";
// import * as actions from "../../../src/redux/contacts/contacts-actions";
import Form from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const loading = useSelector((state) => state.contacts.loading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  const addContact = (data) => {
    // console.log(data);
    const clear = contacts.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );

    if (clear) {
      alert(`${data.name} Уже есть в списке`);
    } else {
      dispatch(
        addNewContacts({
          // id: nanoid(),
          name: data.name,
          phone: data.number,
        })
      );
    }
  };

  const delList = (idList) => {
    console.log(idList);
    dispatch(newDelContact(contacts.filter((item) => item.id === idList)));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <>
      <h1>Тел.Книга</h1>
      <Form addList={addContact} />
      {loading && <h2>Загружаю.....</h2>}
      <h2>Contacts</h2>
      <Filter onChangeFilter={handleChangeFilter} filState={filter} />
      {filteredContacts.length > 0 && (
        <ContactList filtered={filteredContacts} del={delList} />
      )}
    </>
  );
};
export default App;
