import { configureStore } from '@reduxjs/toolkit';
import count from './features/countSlice';

export const store = configureStore({
  reducer: {
    count,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
