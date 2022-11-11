import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { fetchTree } from '../thunks/treeThunk';

interface ITreeState {
  tree: any;
  isLoading: boolean;
  error: string | null;
}

const initialState: ITreeState = {
  tree: {},
  isLoading: false,
  error: '',
};

export const treeSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTree.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.tree = action.payload;
      state.error = '';
      state.isLoading = false;
    },
    [fetchTree.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchTree.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default treeSlice.reducer;
