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

export const addNewAccount = createAsyncThunk(
  "auth/register",
  async (newAccount) => {
    try {
      const newRegister = await register(newAccount);
      return newRegister;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginAccount = createAsyncThunk(
  "auth/login",
  async (logAcc, thunkAPI) => {
    try {
      const newRegister = await login(logAcc);
      return newRegister;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    // console.log(state.account[0].token);
    const newRegister = await loginOut(state.account[0].token);
    // state.account[0].token = null;
    return newRegister;
  } catch (error) {
    console.log(error);
  }
});
