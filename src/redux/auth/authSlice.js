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
    isLoading: false,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchRegister.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(fetchLogin.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(fetchLogout.fulfilled, state => {
        state.user = { name: '', email: '', password: '' };
        state.token = '';
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(fetchRefreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(fetchRefreshUser.pending, state => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(fetchRefreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addMatcher(
        action => {
          return action.type.endsWith('/pending');
        },
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => {
          return action.type.endsWith('/rejected');
        },
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export default authSlice.reducer;
