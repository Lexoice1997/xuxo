import { createAsyncThunk } from '@reduxjs/toolkit';
import { $authHost } from '../../helpers/http';
import { IReferralData, IResponseTree } from '../../types/ITree';

export const fetchReferral = createAsyncThunk(
  'tree/fetchReferral',
  async (id: number | undefined, thunkAPI) => {
    try {
      const { data } = await $authHost.get<IResponseTree<IReferralData>>(`/user/referal`);
      return data.payload[0];
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);

export const fetchTree = createAsyncThunk(
  'tree/fetchTree',
  async (id: string | number | undefined, thunkAPI) => {
    try {
      const { data } = await $authHost.get(`/user/referal/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);
