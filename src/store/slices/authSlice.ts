import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ILogin, ILoginData } from '../../types/IAuth';
import { IUpdateUser } from '../../types/IUsers';
import { checkLogin, postLogin, postRegistration } from '../thunks/authThunk';

interface IAuthState {
  user: ILoginData;
  token: string | null | undefined;
  isUserLogin: boolean;
  pendingError: 'wait' | 'success' | 'error';
  isLoading: boolean;
  error: string | null;
}

const initialState: IAuthState = {
  user: {
    id: 0,
    first_name: '',
    last_name: '',
    balance: 0,
    passport_number: '',
    phone_number: '',
    pinfl: '',
    card_number: '',
    expiration_date: '',
    status: '',
    role: localStorage.getItem('role') ? localStorage.getItem('role') : null,
    isActive: localStorage.getItem('isActive') ? localStorage.getItem('isActive') : null,
    created_at: '',
    tree: 0,
  },
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  isUserLogin: false,
  pendingError: 'wait',
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
      state.user.isActive = '1';
    },
    handlePendingError(state, action: PayloadAction<'wait' | 'success' | 'error'>) {
      state.pendingError = action.payload;
    },
    setBalance(state, action: PayloadAction<number>) {
      state.user.balance -= action.payload;
    },
    setUpdateUser(state, action: PayloadAction<IUpdateUser>) {
      state.user.first_name = action.payload.first_name;
      state.user.last_name = action.payload.last_name;
      state.user.card_number = action.payload.card_number;
      state.user.expiration_date = action.payload.expiration_date;
    },
  },
  extraReducers: {
    [postRegistration.fulfilled.type]: (state) => {
      state.pendingError = 'success';
      state.error = '';
      state.isLoading = false;
    },
    [postRegistration.pending.type]: (state) => {
      state.isLoading = true;
    },
    [postRegistration.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.pendingError = 'error';
      state.error = action.payload;
    },
    [postLogin.fulfilled.type]: (state, action: PayloadAction<ILogin>) => {
      state.user = action.payload.user;
      state.pendingError = 'success';
      state.isUserLogin = true;
      state.error = '';
      state.isLoading = false;
    },
    [postLogin.pending.type]: (state) => {
      state.isLoading = true;
    },
    [postLogin.rejected.type]: (state) => {
      state.isLoading = false;
      state.pendingError = 'error';
    },
    [checkLogin.fulfilled.type]: (state, action: PayloadAction<ILoginData>) => {
      state.user = action.payload;
      state.pendingError = 'success';
      state.isUserLogin = true;
      state.error = '';
      state.isLoading = false;
    },
    [checkLogin.pending.type]: (state) => {
      state.isLoading = true;
    },
    [checkLogin.rejected.type]: (state) => {
      state.isLoading = false;
      state.pendingError = 'error';
    },
  },
});

export const { logout, handleActivate, handlePendingError, setUpdateUser, setBalance } =
  authSlice.actions;

export default authSlice.reducer;
