import { configureStore } from '@reduxjs/toolkit';
import { gotApi } from './api';

export const store = configureStore({
  reducer: {
    [gotApi.reducerPath]: gotApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gotApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
