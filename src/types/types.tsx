import { ReactNode } from 'react';

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

export type Films = {
  title: string;
  opening_crawl: string;
};
