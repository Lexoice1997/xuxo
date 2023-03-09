import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IPaymentOneUser, IPayments, IPaymentsData } from '../../types/IPayments';
import { fetchPayments, fetchPaymentsByUser } from '../thunks/paymentsThunk';

interface IPaymentsState {
  paymentOneUser: IPaymentOneUser[] | undefined;
  payments: IPaymentsData[] | undefined;
  count: number;
  isLoading: boolean;
  error: string | null;
  reload: number;
  page: number;
}

const initialState: IPaymentsState = {
  paymentOneUser: undefined,
  payments: undefined,
  count: 0,
  isLoading: false,
  page: 1,
  error: '',
  reload: 0,
};

export const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    setCount(state) {
      state.reload += 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [fetchPayments.fulfilled.type]: (state, action: PayloadAction<IPayments>) => {
      state.payments = action.payload.data;
      state.count = action.payload.count;
      state.error = '';
      state.isLoading = false;
    },
    [fetchPayments.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPayments.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchPaymentsByUser.fulfilled.type]: (state, action: PayloadAction<IPaymentOneUser[]>) => {
      state.paymentOneUser = action.payload;
      state.error = '';
      state.isLoading = false;
    },
    [fetchPaymentsByUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPaymentsByUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setCount, setPage } = paymentsSlice.actions;

export default paymentsSlice.reducer;
