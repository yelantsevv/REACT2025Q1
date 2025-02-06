import { Films, Person, Results, State } from '../types/types';

export const mockResults: Results = {
  error: '',
  films: [],
  name: 'Luke Skywalker',
  url: 'https://swapi.dev/api/people/1/',
  gender: 'male',
  height: '172',
  mass: '77',
  skin_color: 'caucasian',
  eye_color: 'blue',
  birth_year: '19BBY',
  hair_color: 'blond',
};
export const mockPerson: Person = {
  count: 1,
  previous: 'https://swapi.dev/api/people/?page=1',
  next: 'https://swapi.dev/api/people/?page=2',
  results: [mockResults],
};

export const mockState: State = {
  isLoading: false,
  results: [mockResults],
  pageLink: () => ({}),
};

export const mockFilms: Films = {
  title: 'The Empire Strikes Back',
  opening_crawl: 'It is a dark time for the Luke Skywalke...',
  director: 'Irvin Kershner',
  producer: 'Gary Kurtz, Rick McCallum',
  release_date: '1980-05-17',
  characters: [
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/people/2/',
    'https://swapi.dev/api/people/3/',
  ],
  planets: [
    'https://swapi.dev/api/planets/4/',
    'https://swapi.dev/api/planets/5/',
    'https://swapi.dev/api/planets/6/',
    'https://swapi.dev/api/planets/27',
  ],
  starships: [
    'https://swapi.dev/api/starships/3/',
    'https://swapi.dev/api/starships/10/',
    'https://swapi.dev/api/starships/11/',
    'https://swapi.dev/api/starships/12/',
  ],
  vehicles: [
    'https://swapi.dev/api/vehicles/8/',
    'https://swapi.dev/api/vehicles/14/',
    'https://swapi.dev/api/vehicles/16/',
    'https://swapi.dev/api/vehicles/18/',
    'https://swapi.dev/api/vehicles/19/',
    'https://swapi.dev/api/vehicles/20/',
  ],
  species: [
    'https://swapi.dev/api/species/1/',
    'https://swapi.dev/api/species/2/',
    'https://swapi.dev/api/species/3/',
    'https://swapi.dev/api/species/6/',
    'https://swapi.dev/api/species/7/',
  ],
  created: '2014-12-12T11:26:24.656000Z',
  edited: '2014-12-15T13:07:53.386000Z',
  url: 'https://swapi.dev/api/films/2/',
};
