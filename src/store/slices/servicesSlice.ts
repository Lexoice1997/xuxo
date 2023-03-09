import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IService } from '../../types/IServices';
import { fetchServiceById, fetchServices } from '../thunks/servicesThunk';

interface IServicesState {
  service: IService | undefined;
  services: IService[] | undefined;
  isLoading: boolean;
  error: string | null;
  reload: number;
}

const initialState: IServicesState = {
  service: undefined,
  services: undefined,
  isLoading: false,
  error: '',
  reload: 0,
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setCount(state) {
      state.reload += 1;
    },
  },
  extraReducers: {
    [fetchServices.fulfilled.type]: (state, action: PayloadAction<IService[]>) => {
      state.services = action.payload;
      state.error = '';
      state.isLoading = false;
    },
    [fetchServices.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchServices.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchServiceById.fulfilled.type]: (state, action: PayloadAction<IService>) => {
      state.service = action.payload;
      state.error = '';
      state.isLoading = false;
    },
    [fetchServiceById.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchServiceById.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setCount } = servicesSlice.actions;

export default servicesSlice.reducer;
