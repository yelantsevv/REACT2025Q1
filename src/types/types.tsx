import { ReactNode } from 'react';

export enum enums {
  REDIRECT = 'REDIRECT',
}

export type Props = {
  children: ReactNode;
};

export type StateError = {
  hasError: boolean;
  error: Error | null;
};

export type Results = {
  films: string[];
  gender: string;
  height: string;
  mass: string;
  name: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  hair_color: string;
  url: string;
};

export type Person = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Results[];
};

export type State = {
  isLoading: boolean;
  pageLink: (page: string) => void;
} & Partial<Person>;

export type Films = {
  title: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

export type CustomLinkProps = {
  search?: string;
  pageLink: (page: string) => void;
  item: string | number;
};
