import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddNewContact,
  fetchDeleteContact,
  fetchGetAllContacts,
} from './operations';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: { items: [], isLoading: false, error: null },
    filter: '',
  },
  reducers: {
    // addContact: (state, { payload }) => {
    //   state.contacts = [...state.contacts, payload];
    // },
    // deleteContact: (state, { payload }) => {
    //   state.contacts = state.contacts.filter(({ id }) => id !== payload);
    // },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGetAllContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(fetchAddNewContact.fulfilled, (state, { payload }) => {
        state.contacts.items = [...state.contacts.items, payload];
        state.contacts.isLoading = false;
      })
      .addCase(fetchDeleteContact.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(contact => {
          return contact.id !== payload.id;
        });
        state.contacts.isLoading = false;
      })
      .addMatcher(
        action => {
          action.type.endsWith('/pending');
        },
        (state, { payload }) => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        action => {
          action.type.endsWith('/rejected');
        },
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = payload;
        }
      );
  },
});

export const { addContact, deleteContact, setFilter } = contactSlice.actions;

export default contactSlice.reducer;
