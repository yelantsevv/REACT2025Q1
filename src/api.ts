import { Country } from './type';

export const json: Promise<Country[]> = fetch(
  'https://restcountries.com/v3.1/all'
).then((res) => res.json());
