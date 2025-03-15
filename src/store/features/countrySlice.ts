import { createSlice } from '@reduxjs/toolkit';
import { countryList } from '../db';

export type Country = {
  cca2: string;
  country: string;
  flag: string;
  countryRus: string;
};

const countrySlice = createSlice({
  name: 'country',
  initialState: countryList as Country[],
  reducers: {},
});

export default countrySlice.reducer;
