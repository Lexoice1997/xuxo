import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IAllUsers, IUsers, IUsersData } from '../../types/IUsers';
import { fetchAllUsers, fetchUsers } from './../thunks/usersThunk';

interface IUsersState {
  allUsers: IAllUsers[] | undefined;
  users: IUsersData[] | undefined;
  count: number;
  newUsersPage: number;
  usersPage: number;
  isLoading: boolean;
  error: string | null;
  reload: number;
}

const initialState: IUsersState = {
  allUsers: undefined,
  users: undefined,
  count: 0,
  newUsersPage: 1,
  usersPage: 1,
  isLoading: false,
  error: '',
  reload: 0,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setNewUsersPage(state, action: PayloadAction<number>) {
      state.newUsersPage = action.payload;
    },
    setUsersPage(state, action: PayloadAction<number>) {
      state.usersPage = action.payload;
    },
    setReload(state) {
      state.reload += 1;
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUsers>) => {
      state.users = action.payload.data;
      state.count = action.payload.count;
      state.error = '';
      state.isLoading = false;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchAllUsers.fulfilled.type]: (state, action: PayloadAction<IUsersData[]>) => {
      const data = action.payload.map((item: IUsersData) => {
        return { value: item.id, label: `${item.first_name} ${item.last_name}` };
      });
      state.allUsers = data;
      state.error = '';
      state.isLoading = false;
    },
  },
});

export const { setNewUsersPage, setUsersPage, setReload } = usersSlice.actions;

export default usersSlice.reducer;
