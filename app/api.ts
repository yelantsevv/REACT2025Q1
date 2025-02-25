export const URL = 'https://swapi.dev/api/people/';

export async function getPeople({ id = '' }) {
  const res = await fetch(URL + id);
  const person = await res.json();

  if (person.films) {
    person.films = await Promise.all(person.films.map(getFilm));
  }
  return person;
}

async function getFilm(filmUrl: string) {
  const res = await fetch(filmUrl);
  return await res.json();
}

export async function getSearch({ id = '' }) {
  const res = await fetch(URL + id);
  const pages = await res.json();
  return pages;
}
