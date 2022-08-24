import { configureStore } from '@reduxjs/toolkit';
import { gotApi } from './api';
import paginationInfo from './paginationInfo';

export const store = configureStore({
  reducer: {
    [gotApi.reducerPath]: gotApi.reducer,
    paginationInfo: paginationInfo,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gotApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
