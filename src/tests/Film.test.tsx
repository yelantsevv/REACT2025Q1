import { Film } from '../components';
import { mockFilms } from './mockData';
import { mockRouter } from './mockRouter';
import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';

vi.mock('../lib/api', () => ({
  getFilm: vi.fn(() => Promise.resolve(mockFilms)),
}));

describe('Film Component', () => {
  it('renders film data correctly', async () => {
    mockRouter(await Film({ filmLink: 'mockFilms' }));
    expect(screen.getByText(mockFilms.title)).toBeInTheDocument();
    expect(screen.getByText(`: ${mockFilms.director}`)).toBeInTheDocument();
    expect(screen.getByText(`: ${mockFilms.producer}`)).toBeInTheDocument();
  });
});
