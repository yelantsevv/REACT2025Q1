import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Films, Person, Results } from 'src/types/types';

export const URL = 'https://swapi.dev/api/people/';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getPeopleList: builder.query<Person, string>({
      query: (query) => query,
    }),
  }),
});

export const apiPeople = createApi({
  reducerPath: 'apiPeople',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getPeople: builder.query<Results, string>({
      query: (id) => id,
    }),
  }),
});

export const apiFilm = createApi({
  reducerPath: 'apiFilm',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api/films/',
  }),
  endpoints: (builder) => ({
    getFilm: builder.query<Films, string>({
      query: (page) => page,
    }),
  }),
});

export const { useGetPeopleListQuery } = api;
export const { useGetPeopleQuery } = apiPeople;
export const { useGetFilmQuery } = apiFilm;
