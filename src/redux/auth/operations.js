import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { register } from 'service/authAPI';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const fetchRegister = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const result = await register(credentials);
      //   setToken(result.data.token);
      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
