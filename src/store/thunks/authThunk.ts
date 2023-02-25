import { createAsyncThunk } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { $authHost, $host } from '../../helpers/http';
import { ILogin } from '../../types/IAuth';

export interface IRegistrationProps {
  firstname: string;
  lastname: string;
  address: string;
  birthday: Date;
  pinfl: string;
  phone: string;
  password: string;
  patronymic?: string | null;
  refCode?: number | null;
  role?: string;
}

export const postRegistration = createAsyncThunk(
  'registration/postRegistration',
  async (registrationProps: IRegistrationProps, thunkAPI) => {
    try {
      const { data } = await $host.post<ILogin>('auth/register', {
        ...registrationProps,
        birthday: dayjs(registrationProps.birthday).format('YYYY-MM-DD'),
        refCode: Number(registrationProps.refCode),
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);

export interface ILoginProps {
  phone: string;
  password: string;
}

export const postLogin = createAsyncThunk(
  'login/postLogin',
  async ({ phone, password }: ILoginProps, thunkAPI) => {
    try {
      const { data } = await $host.post<ILogin>('auth/login', {
        phone,
        password,
      });
      localStorage.setItem('token', data.token);
      return data;
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
