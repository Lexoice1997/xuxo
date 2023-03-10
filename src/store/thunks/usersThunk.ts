import { createAsyncThunk } from '@reduxjs/toolkit';
import { $authHost } from '../../helpers/http';
import { IResponse } from '../../types';
import { IUpdateUser, IUsers } from './../../types/IUsers';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (
    { take, page, IsActive }: { take?: number; page?: number; IsActive?: number },
    thunkAPI
  ) => {
    try {
      const { data } = await $authHost.get<IResponse<IUsers>>(`/admin/users`, {
        params: { take, page, IsActive },
      });
      return data.payload;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);

export const fetchAllUsers = createAsyncThunk('users/fetchAllUsers', async (_, thunkAPI) => {
  try {
    const { data } = await $authHost.get<IResponse<IUsers>>(`/admin/users/all`);
    return data.payload;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
  }
});

export const activateUser = createAsyncThunk(
  'users/activateUser',
  async ({ active, id }: { active: number; id: number }, thunkAPI) => {
    try {
      const { data } = await $authHost.patch(`/admin/user/active/?active=${active}&id=${id}`);
      return data.payload;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);

export const addReferalUser = createAsyncThunk(
  'users/referalUser',
  async ({ customerId, referal }: { customerId: number; referal: number }, thunkAPI) => {
    try {
      const { data } = await $authHost.post(`/admin/referal`, {
        customerId,
        referal,
      });
      return data.payload;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ first_name, last_name, card_number, expiration_date }: IUpdateUser, thunkAPI) => {
    try {
      const { data } = await $authHost.patch(`/user/profile`, {
        first_name,
        last_name,
        card_number,
        expiration_date,
      });
      return data.payload;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);
