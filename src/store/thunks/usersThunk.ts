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

export const updateStatus = createAsyncThunk(
  'users/updateStatus',
  async (
    { customerId, status, balance }: { customerId: number; status: string; balance: number },
    thunkAPI
  ) => {
    try {
      const { data } = await $authHost.patch(`/admin/user`, {
        customerId,
        status,
        balance,
      });
      return data.payload;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (
    { first_name, last_name, card_number, expiration_date, password }: IUpdateUser,
    thunkAPI
  ) => {
    try {
      const { data } = await $authHost.patch(`/user/profile`, {
        first_name,
        last_name,
        card_number,
        expiration_date,
        password,
      });
      return data.payload;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);

export const deleteUser = createAsyncThunk('users/deleteUser', async (id: number, thunkAPI) => {
  try {
    const { data } = await $authHost.delete(`/admin/user/delete/${id}`);
    return data.payload;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
  }
});
