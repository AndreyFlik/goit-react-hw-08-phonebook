import { createReducer, combineReducers } from "@reduxjs/toolkit";

import {
  getContacts,
  addNewContacts,
  newDelContact,
  changeFilter,
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
    state.filter((item) => item.id !== action.payload.id),
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

const contactsReducer = combineReducers({
  items: entities,
  filter: entitiesFilter,
  loading: isLoading,
});

export default contactsReducer;
