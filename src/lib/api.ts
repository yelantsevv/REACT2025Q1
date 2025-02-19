export const URL = 'https://swapi.dev/api/people/';

export async function getPeople({ id = '' }) {
  const res = await fetch(URL + id);
  const person = await res.json();
  return person;
}

export async function getFilm(filmUrl: string) {
  const res = await fetch(filmUrl);
  const film = await res.json();
  return film;
}

export async function getSearch({ search = '', page = '1' }) {
  const res = await fetch(`${URL}?search=${search}&page=${page}`);
  const pages = await res.json();
  return pages;
}
