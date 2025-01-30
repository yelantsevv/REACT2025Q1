export const URL = 'https://swapi.dev/api/people/';

export const getData = async <T>(page: string): Promise<T> => {
  const response = await fetch(page);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
