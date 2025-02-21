import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'checking',
  displayName: null,
  photoURL: null,
  email: null,
  uid: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    startCheckingStatus: (state) => {
      state.status = 'checking';
    },
    login: (state, { payload }) => {
      state.status = 'authenticated';
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.email = payload.email;
      state.uid = payload.uid;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.displayName = null;
      state.photoURL = null;
      state.email = null;
      state.uid = null;
      state.errorMessage = payload?.errorMessage;
    },
  },
});

export const { startCheckingStatus, login, logout } = authSlice.actions;
