import { createSlice } from '@reduxjs/toolkit';
import { fetchRegister } from './operations';

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

export default authSlice.reducer;
