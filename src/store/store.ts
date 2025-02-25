import { configureStore } from '@reduxjs/toolkit';
import choice from './Redux/features/choiceSlice';
import { apiFilm } from './Redux/api';
export const store = configureStore({
  reducer: {
    choice,
    [apiFilm.reducerPath]: apiFilm.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiFilm.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
