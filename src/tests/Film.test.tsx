import { screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Film from '../components/Film/Film';
import { mockFilms } from './mockData';
import { mockRouter } from './mockRouter';
import { useGetFilmQuery } from '../store/Redux/api';

vi.mock(
  '../store/Redux/api',
  async (
    importOriginal: () => Promise<typeof import('../store/Redux/api')>
  ) => {
    const actual = await importOriginal();
    return {
      ...actual,
      useGetFilmQuery: vi.fn(),
    };
  }
);

describe('Film Component with RTK Query', () => {
  it('renders loading state initially', () => {
    vi.mocked(useGetFilmQuery).mockReturnValueOnce({
      isLoading: true,
    } as unknown as ReturnType<typeof useGetFilmQuery>);
    mockRouter(<Film film="loading" />);
    expect(screen.getByTestId('loading-film')).toBeInTheDocument();
  });

  it('renders with error', async () => {
    vi.mocked(useGetFilmQuery).mockReturnValueOnce({
      error: new Error('Fetch error'),
    } as unknown as ReturnType<typeof useGetFilmQuery>);
    mockRouter(<Film film="error" />);

    expect(screen.getByText('Ops something went wrong')).toBeInTheDocument();
  });

  it('renders film data correctly', async () => {
    vi.mocked(useGetFilmQuery).mockReturnValueOnce({
      data: mockFilms,
    } as unknown as ReturnType<typeof useGetFilmQuery>);
    mockRouter(<Film film="mockFilms" />);

    expect(screen.getByText(mockFilms.title)).toBeInTheDocument();
    expect(screen.getByText(`: ${mockFilms.director}`)).toBeInTheDocument();
    expect(screen.getByText(`: ${mockFilms.producer}`)).toBeInTheDocument();
  });
});
