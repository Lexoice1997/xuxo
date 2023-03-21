import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IReferralData } from '../../types/ITree';
import { fetchReferral } from '../thunks/treeThunk';

interface ITreeState {
  tree: IReferralData | undefined;
  isLoading: boolean;
  error: string | null;
}

const initialState: ITreeState = {
  tree: undefined,
  isLoading: false,
  error: '',
};

export const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    setReferrals(state, action: PayloadAction<any>) {
      state.tree = action.payload;
    },
  },
  extraReducers: {
    [fetchReferral.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.tree = action.payload;
      state.error = '';
      state.isLoading = false;
    },
    [fetchReferral.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchReferral.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setReferrals } = treeSlice.actions;

export default treeSlice.reducer;
