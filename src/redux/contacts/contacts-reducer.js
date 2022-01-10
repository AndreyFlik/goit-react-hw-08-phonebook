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
  [addNewContacts.fulfilled]: (state, action) => [action.payload, ...state],
  [newDelContact.fulfilled]: (state, action) =>
    state.filter((item) => item.id !== action.meta.arg[0].id),
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
const entitiesFilter = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});
const showContacts = createReducer(false, {
  [getCurrentUser.pending]: () => true,
  [getCurrentUser.fulfilled]: () => false,
  [getCurrentUser.rejected]: () => false,
});
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
};

const account = createReducer(initialState, {
  [addNewAccount.fulfilled]: (_, action) => ({
    ...action.payload,
    isLogin: true,
  }),
  [loginAccount.fulfilled]: (_, action) => ({
    ...action.payload,
    isLogin: true,
  }),
  [getCurrentUser.fulfilled]: (state, { payload }) => ({
    ...state,
    user: { ...payload },
    isLogin: true,
  }),
  [logOut.fulfilled]: () => initialState,
});

const contactsReducer = combineReducers({
  items: entities,
  filter: entitiesFilter,
  loading: isLoading,
});

export { contactsReducer, account, showContacts };
