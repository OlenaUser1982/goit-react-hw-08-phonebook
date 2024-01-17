import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addNewContact,
  deleteContact,
  getAllContacts,
} from 'service/contactsApi';

export const fetchGetAllContacts = createAsyncThunk(
  'contact/getAll',
  async (_, thunkAPI) => {
    try {
      const result = await getAllContacts();
      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchAddNewContact = createAsyncThunk(
  'contact/addContact',
  async (data, thunkAPI) => {
    try {
      const result = await addNewContact(data);
      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchDeleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (data, thunkAPI) => {
    try {
      const result = await deleteContact(data);
      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
