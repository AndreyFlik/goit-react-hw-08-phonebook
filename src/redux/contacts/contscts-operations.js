import {
  fetchContacts,
  addContact,
  delContact,
} from "../../Components/services/api";
// import {
//   setContactRequest,
//   setContactSuccess,
//   setContactError,
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   delContactRequest,
//   delContactSuccess,
//   delContactError,
// } from "../../redux/contacts/contacts-actions";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

// export const getContacts = () => async (dispatch) => {
//   dispatch(setContactRequest());

//   try {
//     const contacts = await fetchContacts();
//     dispatch(setContactSuccess(contacts));
//   } catch (error) {
//     dispatch(setContactError(error));
//     alert(`error`);
//   }
// };

export const getContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const contacts = await fetchContacts();
    return contacts;
  }
);

export const changeFilter = createAction("contacts/changeFilter");
// export const addNewContacts = (contact) => async (dispatch) => {
//   dispatch(addContactRequest());

//   try {
//     const contacts = await addContact(contact);
//     dispatch(addContactSuccess(contacts));
//   } catch (error) {
//     dispatch(addContactError(error));
//     alert(`error`);
//   }
// };

export const addNewContacts = createAsyncThunk(
  "contacts/addContacts",
  async (contact) => {
    const contacts = await addContact(contact);
    return contacts;
  }
);

// export const newDelContact = (contact) => async (dispatch) => {
//   dispatch(delContactRequest());
//   //   console.log(contact);
//   try {
//     const contacts = await delContact(contact);
//     dispatch(delContactSuccess(contacts));
//   } catch (error) {
//     dispatch(delContactError(error));
//     alert(`error`);
//   }
// };
export const newDelContact = createAsyncThunk(
  "contacts/delContact",
  async (contact) => {
    const contacts = await delContact(contact);
    return contacts;
  }
);
