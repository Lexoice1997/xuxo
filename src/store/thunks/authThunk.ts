import { createAsyncThunk } from '@reduxjs/toolkit';
import { $authHost, $host } from '../../helpers/http';
import { ILogin } from '../../types/IAuth';
import { IResponse } from './../../types/index';

export interface IRegistrationProps {
  first_name: string;
  last_name: string;
  passport_number: string;
  pinfl: string;
  phone_number: string;
  password: string;
  address?: string;
  patronymic?: string | null;
  refCode?: number | null;
  role?: string;
}

export const postRegistration = createAsyncThunk(
  'registration/postRegistration',
  async (registrationProps: IRegistrationProps, thunkAPI) => {
    try {
      const { data } = await $host.post<IResponse<ILogin>>('auth/register', {
        first_name: registrationProps.first_name,
        last_name: registrationProps.last_name,
        passport_number: registrationProps.passport_number,
        pinfl: registrationProps.pinfl,
        phone_number: `+${registrationProps.phone_number}`,
        password: registrationProps.password,
      });
      return data.payload;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);

export interface ILoginProps {
  username: string;
  password: string;
}

export const postLogin = createAsyncThunk(
  'login/postLogin',
  async ({ username, password }: ILoginProps, thunkAPI) => {
    try {
      const { data } = await $host.post<IResponse<ILogin>>('auth/login', {
        username,
        password,
      });
      localStorage.setItem('token', data.payload.token);
      return data.payload;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);

export const checkLogin = createAsyncThunk('check/checkLogin', async (_, thunkAPI) => {
  try {
    const { data } = await $authHost.get<ILogin>('check');
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
  }
});
