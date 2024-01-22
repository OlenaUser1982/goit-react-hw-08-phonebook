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
          return action.type.endsWith('/pending');
        },
        (state, { payload }) => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        action => {
          return action.type.endsWith('/rejected');
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
