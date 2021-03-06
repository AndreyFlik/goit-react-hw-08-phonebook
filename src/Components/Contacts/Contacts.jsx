import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./contscts.module.css";
import {
  getContacts,
  addNewContacts,
  newDelContact,
  changeFilter,
} from "../../redux/contacts/contscts-operations";

import Form from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

const Contacts = () => {
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
    const clear = contacts.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );

    if (clear) {
      alert(`${data.name} Уже есть в списке`);
    } else {
      dispatch(
        addNewContacts({
          name: data.name,
          number: data.number,
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
      <h1 className={s.title}>Тел.Книга</h1>
      <Form addList={addContact} />
      {loading && <h2>Загружаю.....</h2>}
      <h2 className={s.title}>Contacts</h2>
      <Filter onChangeFilter={handleChangeFilter} filState={filter} />
      {filteredContacts.length > 0 && (
        <ContactList filtered={filteredContacts} del={delList} />
      )}
    </>
  );
};

export default Contacts;
