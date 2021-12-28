import {
  fetchContacts,
  addContact,
  delContact,
} from "../../Components/services/api";

import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const getContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const contacts = await fetchContacts();
    return contacts;
  }
);

export const changeFilter = createAction("contacts/changeFilter");

export const addNewContacts = createAsyncThunk(
  "contacts/addContacts",
  async (contact) => {
    const contacts = await addContact(contact);
    return contacts;
  }
);

export const newDelContact = createAsyncThunk(
  "contacts/delContact",
  async (contact) => {
    const contacts = await delContact(contact);
    return contacts;
  }
);
