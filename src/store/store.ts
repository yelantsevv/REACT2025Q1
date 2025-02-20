import { configureStore } from '@reduxjs/toolkit';
import choice from './Redux/features/choiceSlice';
import { api, apiFilm, apiPeople } from './Redux/api';

export const store = configureStore({
  reducer: {
    choice,
    [api.reducerPath]: api.reducer,
    [apiFilm.reducerPath]: apiFilm.reducer,
    [apiPeople.reducerPath]: apiPeople.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      apiFilm.middleware,
      apiPeople.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
