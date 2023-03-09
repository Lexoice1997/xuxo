import { createAsyncThunk } from '@reduxjs/toolkit';
import { $authHost } from '../../helpers/http';
import { IResponse } from '../../types/index';
import { IService } from '../../types/IServices';

export const fetchServices = createAsyncThunk('services/fetchServices', async (_, thunkAPI) => {
  try {
    const { data } = await $authHost.get<IResponse<IService>>(`/services`);
    return data.payload;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
  }
});

export const fetchServiceById = createAsyncThunk(
  'services/fetchServiceById',
  async (id: string | undefined, thunkAPI) => {
    try {
      const { data } = await $authHost.get<IResponse<IService>>(`/services/${id}`);
      return data.payload;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);

export const createService = createAsyncThunk(
  'services/createService',
  async (service: any, thunkAPI) => {
    try {
      const { data } = await $authHost.post(`/services`, service);
      return data.payload;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);

export const deleteService = createAsyncThunk(
  'services/deleteService',
  async (id: number, thunkAPI) => {
    try {
      const { data } = await $authHost.delete(`/services/${id}`);
      return data.payload;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);
