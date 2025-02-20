import { CardList } from '../components';
import { mockRouter } from './mockRouter.tsx';
import { useGetPeopleListQuery } from '../store/Redux/api';

vi.mock(
  '../store/Redux/api',
  async (
    importOriginal: () => Promise<typeof import('../store/Redux/api')>
  ) => {
    const actual = await importOriginal();
    return {
      ...actual,
      useGetPeopleListQuery: vi.fn(),
    };
  }
);

vi.mock('../components/Card/Card.tsx', () => ({
  default: vi.fn(() => <div data-testid="card" />),
}));

describe('CardList Component', () => {
  it('renders a list of cards when No results', async () => {
    vi.mocked(useGetPeopleListQuery).mockReturnValueOnce({
      data: { results: [] },
    } as unknown as ReturnType<typeof useGetPeopleListQuery>);

    mockRouter(<CardList />);

    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  it('renders a spinner when loading', () => {
    vi.mocked(useGetPeopleListQuery).mockReturnValueOnce({
      isFetching: true,
    } as unknown as ReturnType<typeof useGetPeopleListQuery>);
    mockRouter(<CardList />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('renders no results error: true', async () => {
    vi.mocked(useGetPeopleListQuery).mockReturnValueOnce({
      error: { status: 404 },
    } as unknown as ReturnType<typeof useGetPeopleListQuery>);
    mockRouter(<CardList />);

    expect(screen.getByTestId('error')).toBeInTheDocument();
    expect(screen.getByText('Ops, something went wrong')).toBeInTheDocument();
  });
});
