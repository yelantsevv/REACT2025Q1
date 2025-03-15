import { configureStore } from '@reduxjs/toolkit';
import country from './features/countrySlice';
import dataForm from './features/dataFormSlice';

export const store = configureStore({
  reducer: {
    country,
    dataForm,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
