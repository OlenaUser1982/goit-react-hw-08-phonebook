import { createSelector } from '@reduxjs/toolkit';

export const selectContact = state => state.contacts.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectVisibleContacts = createSelector(
  [selectContact, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
