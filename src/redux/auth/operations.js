import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { login, logout, refreshUser, register } from 'service/authAPI';
import { contactsAPI } from 'service/contactsApi';

const setToken = token => {
  contactsAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const fetchRegister = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const result = await register(credentials);
      setToken(result.data.token);
      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchLogin = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const result = await login(credentials);
      setToken(result.data.token);
      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchRefreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) thunkAPI.rejectWithValue('user Unauthorization');
    setToken(token);
    try {
      const result = await refreshUser();

      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const result = await logout();
      setToken('');
      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
