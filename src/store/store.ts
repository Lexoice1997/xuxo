import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import paymentsReducer from './slices/paymentsSlice';
import servicesReducer from './slices/servicesSlice';
import treeReducer from './slices/treeSlice';
import usersReducer from './slices/usersSlice';

const rootReducer = combineReducers({
  authReducer,
  treeReducer,
  usersReducer,
  servicesReducer,
  paymentsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
