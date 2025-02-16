import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
};

export type StateError = {
  error: Error | null;
};

export type Results = {
  films: Films[];
  gender: string;
  height: string;
  mass: string;
  name: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  hair_color: string;
  url: string;
  error: string;
};

export type Person = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Results[];
};

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
  query: string;
  item: string | number;
};

export type ErrorPageType = {
  error?: Error | null;
  reset?: () => void;
};

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
} | null;
