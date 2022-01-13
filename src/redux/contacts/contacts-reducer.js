import { createReducer, combineReducers } from "@reduxjs/toolkit";

import {
  getContacts,
  addNewContacts,
  newDelContact,
  changeFilter,
  addNewAccount,
  loginAccount,
  logOut,
  getCurrentUser,
} from "./contscts-operations";

const entities = createReducer([], {
  [getContacts.fulfilled]: (_, action) => action.payload,
  [addNewContacts.fulfilled]: (state, action) => [...state, action.payload],
  [newDelContact.fulfilled]: (state, action) =>
    state.filter((item) => item.id !== action.meta.arg[0].id),
});

const entitiesFilter = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [addNewContacts.pending]: () => true,
  [addNewContacts.fulfilled]: () => false,
  [addNewContacts.rejected]: () => false,
  [newDelContact.pending]: () => true,
  [newDelContact.fulfilled]: () => false,
  [newDelContact.rejected]: () => false,
});

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  error: null,
};

const account = createReducer(initialState, {
  [addNewAccount.fulfilled]: (_, action) => ({
    ...action.payload,
    isLogin: true,
  }),
  [addNewAccount.rejected]: (state, action) => {
    state.error = action.payload;
  },
  [addNewAccount.pending]: (state, _) => ({ ...state, error: null }),

  [loginAccount.fulfilled]: (_, action) => ({
    ...action.payload,
    isLogin: true,
  }),
  [loginAccount.pending]: (state, _) => ({ ...state, error: null }),
  [loginAccount.rejected]: (state, action) => {
    state.error = action.payload;
  },
  [getCurrentUser.fulfilled]: (state, { payload }) => ({
    ...state,
    user: { ...payload },
    isLogin: true,
  }),
  [logOut.fulfilled]: () => initialState,
});

const showContacts = createReducer(false, {
  [getCurrentUser.pending]: () => true,
  [getCurrentUser.fulfilled]: () => false,
  [getCurrentUser.rejected]: () => false,
});

const contactsReducer = combineReducers({
  items: entities,
  filter: entitiesFilter,
  loading: isLoading,
});

export { contactsReducer, account, showContacts };
