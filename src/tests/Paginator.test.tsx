import { screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Paginator from '../components/Paginator/Paginator';
import { mockRouter } from './mockRouter';

vi.mock(
  '../store/Redux/api',
  async (
    importOriginal: () => Promise<typeof import('../store/Redux/api')>
  ) => {
    const actual = await importOriginal();
    return {
      ...actual,
      api: {
        ...actual.api,
        useGetPeopleListQuery: vi.fn(() => ({
          data: { count: 50, results: [] },
          isLoading: false,
          isFetching: false,
          error: null,
        })),
      },
    };
  }
);

vi.mock('../helpers', () => ({
  helper: {
    query: vi.fn(() => '?search=luke'),
    useSearchParams: vi.fn(() => ({ search: 'luke' })),
  },
}));

vi.mock('../components/CustomLink/CustomLink', () => ({
  default: vi.fn(({ search }) => <div data-testid="custom-link">{search}</div>),
}));

describe('Paginator Component', () => {
  beforeEach(() => {
    mockRouter(<Paginator />);
  });

  it('render paginator', () => {
    expect(screen.getByTestId('paginator')).toBeInTheDocument();
  });

  it('render links', () => {
    const links = screen.getAllByTestId('custom-link');
    expect(links).toHaveLength(7);
  });
});
