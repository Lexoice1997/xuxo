import { createAsyncThunk } from '@reduxjs/toolkit';
import { $authHost } from '../../helpers/http';

export const fetchTree = createAsyncThunk(
  'tree/fetchTree',
  async (id: number | undefined, thunkAPI) => {
    try {
      const { data } = await $authHost.get(`/users/tree/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);
