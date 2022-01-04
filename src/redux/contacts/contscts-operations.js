import {
  fetchContacts,
  addContact,
  delContact,
  register,
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

// /*
//  * POST @ /users/signup
//  * body: { name, email, password }
//  * После успешной регистрации добавляем токен в HTTP-заголовок
//  */
// const register = createAsyncThunk("auth/register", async (credentials) => {
//   try {
//     const { data } = await axios.post("/users/signup", credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     // TODO: Добавить обработку ошибки error.message
//   }
// });

// const token = {
//   set(token) {
//     const setToken = `Bearer ${token}`;
//   },
//   unset() {
//     const unsetToken = "";
//   },
// };

export const addNewAccount = createAsyncThunk(
  "auth/register",
  async (newAccount) => {
    try {
      console.log(newAccount);
      const newRegister = await register(newAccount);
      return newRegister;
    } catch (error) {
      console.log(error);
    }
  }
);
