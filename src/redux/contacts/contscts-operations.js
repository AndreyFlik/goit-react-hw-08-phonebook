import {
  fetchContacts,
  addContact,
  delContact,
  register,
  login,
  loginOut,
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
  async (newAccount, token) => {
    try {
      console.log(newAccount);
      // console.log(token);
      const newRegister = await register(newAccount, token);
      // console.log(newRegister.token);
      token = newRegister.token;
      console.log(token);
      return newRegister;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginAccount = createAsyncThunk(
  "auth/login",
  async (logAcc, token) => {
    try {
      console.log(logAcc);
      const newRegister = await login(logAcc, token);
      // token = newRegister.token;
      console.log(newRegister);
      return newRegister;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, token) => {
  try {
    // console.log(logAcc);
    const newRegister = await loginOut(_, token);
    token = null;
    console.log(token);
    return newRegister;
  } catch (error) {
    console.log(error);
  }
});
