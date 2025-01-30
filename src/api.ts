import type { Person } from './types/types';
const URL = 'https://swapi.dev/api/people/';

export const getPeople = async (page = URL): Promise<Person> => {
  const response = await fetch(page);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export const searchPeople = async (value: string): Promise<Person> => {
  const response = await fetch(URL + `?search=${value}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
