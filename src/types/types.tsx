import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
};

export type StateError = {
  hasError: boolean;
  error: Error | null;
};

export type Results = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};

export type Person = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Results[];
};

export type State = {
  isLoading: boolean;
  onSearch: (e: string) => void;
  pageLink: (page: string) => void;
} & Partial<Person>;
