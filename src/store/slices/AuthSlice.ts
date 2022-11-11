import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ILogin } from '../../types/IAuth';
import { postLogin, postRegistration } from '../thunks/authThunk';

interface IAuthState {
  user: ILogin | null;
  token: string | null | undefined;
  isUserLogin: boolean;
  isRegistered: boolean;
  isErrorMessage: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: IAuthState = {
  user: null,
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  isUserLogin: false,
  isRegistered: false,
  isErrorMessage: true,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout(state) {
      state.isUserLogin = false;
      localStorage.removeItem('token');
    },
    handleActivate(state) {
      state.user!.isActivated = true;
    },
    handleRegisteredReset(state) {
      state.isRegistered = false;
    },
  },
  extraReducers: {
    [postRegistration.fulfilled.type]: (state, action: PayloadAction<ILogin>) => {
      // state.user = action.payload;
      // state.isUserLogin = true;
      state.isRegistered = true;
      state.error = '';
      state.isLoading = false;
    },
    [postRegistration.pending.type]: (state) => {
      state.isLoading = true;
    },
    [postRegistration.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [postLogin.fulfilled.type]: (state, action: PayloadAction<ILogin>) => {
      state.user = action.payload;
      state.isUserLogin = true;
      state.error = '';
      state.isLoading = false;
    },
    [postLogin.pending.type]: (state) => {
      state.isLoading = true;
    },
    [postLogin.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isErrorMessage = false;
      // state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
