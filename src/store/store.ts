import { configureStore } from '@reduxjs/toolkit';
import count from './features/countSlice';
import country from './features/countrySlice';
import dataForm from './features/dataFormSlice';

export const store = configureStore({
  reducer: {
    country,
    count,
    dataForm,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
