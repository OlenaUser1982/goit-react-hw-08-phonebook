import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: ' ' },
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts = [...state.contacts, payload];
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactSlice.actions;

export default contactSlice.reducer;
