import { configureStore } from '@reduxjs/toolkit';
import choice from './features/choiceSlice';
export const store = configureStore({
  reducer: {
    choice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
