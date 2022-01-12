import {
  fetchContacts,
  addContact,
  delContact,
  register,
  login,
  loginOut,
  fetchCurrentUser,
} from "../../Components/services/api";

import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const getContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const contacts = await fetchContacts(state.account.token);
      return contacts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const changeFilter = createAction("contacts/changeFilter");

export const addNewContacts = createAsyncThunk(
  "contacts/addContacts",
  async (contact, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const contacts = await addContact(contact, state.account.token);
      return contacts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const newDelContact = createAsyncThunk(
  "contacts/delContact",
  async (contact, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const contacts = await delContact(contact, state.account.token);
      return contacts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addNewAccount = createAsyncThunk(
  "auth/register",
  async (newAccount, thunkAPI) => {
    try {
      const newRegister = await register(newAccount);
      return newRegister;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginAccount = createAsyncThunk(
  "auth/login",
  async (logAcc, thunkAPI) => {
    try {
      const loginUser = await login(logAcc);
      return loginUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const userLogOut = await loginOut(state.account.token);
    return userLogOut;
  } catch (error) {
    console.log(error);
  }
});
export const getCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      if (state.account.token === null) {
        return thunkAPI.rejectWithValue();
      }
      const getUser = await fetchCurrentUser(state.account.token);
      return getUser;
    } catch (error) {
      console.log(error);
    }
  }
);
