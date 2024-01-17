import { createSlice } from '@reduxjs/toolkit';
import {
  fetchLogin,
  fetchLogout,
  fetchRefreshUser,
  fetchRegister,
} from './operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '', password: '' },
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchRegister.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(fetchLogin.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(fetchLogout.fulfilled, state => {
        state.user = { name: '', email: '', password: '' };
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(fetchRefreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(fetchRefreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addMatcher(
        action => {
          action.type.endsWith('/pending');
        },
        state => {
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

export default authSlice.reducer;
