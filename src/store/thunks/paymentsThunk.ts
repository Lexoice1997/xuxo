import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { $authHost } from '../../helpers/http';
import { IResponse } from '../../types';
import { IPaymentOneUser, IPayments } from '../../types/IPayments';

interface FetchPaymentsProps {
  take?: number;
  page?: number;
  customer_id?: number;
  status?: number;
}

export const fetchPayments = createAsyncThunk(
  'payments/fetchPayments',
  async ({ take, page, customer_id, status }: FetchPaymentsProps, thunkAPI) => {
    try {
      const { data } = await $authHost.get<IResponse<IPayments>>(`/admin/paymet/orders`, {
        params: { take, page, customer_id, status },
      });
      return data.payload;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);

export const fetchPaymentsByUser = createAsyncThunk(
  'payments/fetchPaymentsByUserId',
  async (_, thunkAPI) => {
    try {
      const { data } = await $authHost.get<IResponse<IPaymentOneUser>>(`/user/cashout/orders`);
      return data.payload;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);

interface ValidationErrors {
  message: string[];
}

interface CreateAmoute {
  amoute: number;
}

export const createAmoute = createAsyncThunk<
  CreateAmoute,
  Partial<CreateAmoute>,
  {
    rejectValue: ValidationErrors;
  }
>('payments/createAmoute', async (amouteData, { rejectWithValue }) => {
  try {
    const { data } = await $authHost.post(`/user/cashout`, { amoute: Number(amouteData.amoute) });
    return data.payload;
  } catch (err: any) {
    const error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

interface PatchPaymentsBody {
  order_id: number;
  customer: number;
  status: string;
}

export const patchPayments = createAsyncThunk(
  'payments/fetchPayments',
  async ({ order_id, customer, status }: PatchPaymentsBody, thunkAPI) => {
    try {
      const { data } = await $authHost.patch<IResponse<IPayments>>(`/admin/paymet/status`, {
        order_id,
        customer,
        status,
      });
      return data.payload;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  }
);
