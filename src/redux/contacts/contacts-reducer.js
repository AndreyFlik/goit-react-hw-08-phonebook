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

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

// const itemsReducer = createReducer([], (builder) => {
//   builder.addCase(addContact, (state, action) => [...state, action.payload]);
//   builder.addCase(setContact, (_, action) => action.payload);
//   builder.addCase(delContact, (_, action) => action.payload);
// });
const entities = createReducer([], {
  [getContacts.fulfilled]: (_, action) => action.payload,
  [addNewContacts.fulfilled]: (state, action) => [action.payload, ...state],
  [newDelContact.fulfilled]: (state, action) =>
    // console.log(action.meta.arg[0].id),
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

// const isLogin = createReducer(false, {
//   [addNewAccount.fulfilled]: () => true,
//   [loginAccount.fulfilled]: () => true,
// });

const contactsReducer = combineReducers({
  items: entities,
  filter: entitiesFilter,
  loading: isLoading,
});
// const authReducer = combineReducers({ account, isLogin });

export { contactsReducer, account, showContacts };
