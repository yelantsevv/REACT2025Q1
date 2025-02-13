import { CardList } from '../components';
import { mockRouter } from './mockRouter.tsx';
import { mockPerson } from './mockData.ts';
import { api } from '../store/Redux/api';
import { useSelector } from 'react-redux';

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
        useGetPeopleListQuery: vi.fn(),
      },
    };
  }
);

vi.mock(
  'react-redux',
  async (importOriginal: () => Promise<typeof import('react-redux')>) => {
    const actual = await importOriginal();
    return {
      ...actual,
      useSelector: vi.fn(),
    };
  }
);

vi.mock('../components/Card/Card.tsx', () => ({
  default: vi.fn(() => <div data-testid="card" />),
}));

describe('CardList Component', () => {
  it('renders a list of cards when results are provided', async () => {
    vi.mocked(api.useGetPeopleListQuery).mockReturnValueOnce({
      data: mockPerson,
    } as unknown as ReturnType<typeof api.useGetPeopleListQuery>);
    vi.mocked(useSelector).mockReturnValue({
      choice: [{ name: 'Luke' }, { name: 'Skywalker' }],
    });
    mockRouter(<CardList />);
    const cards = screen.getAllByTestId('card');
    expect(cards).toHaveLength(3);
    expect(screen.getByText('Luke')).toBeInTheDocument();
  });

  it('renders a list of cards when No results', async () => {
    vi.mocked(api.useGetPeopleListQuery).mockReturnValueOnce({
      data: { results: [] },
    } as unknown as ReturnType<typeof api.useGetPeopleListQuery>);

    mockRouter(<CardList />);

    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  it('renders a spinner when loading', () => {
    vi.mocked(api.useGetPeopleListQuery).mockReturnValueOnce({
      isFetching: true,
    } as unknown as ReturnType<typeof api.useGetPeopleListQuery>);
    mockRouter(<CardList />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('renders no results error: true', async () => {
    vi.mocked(api.useGetPeopleListQuery).mockReturnValueOnce({
      error: { status: 404 },
    } as unknown as ReturnType<typeof api.useGetPeopleListQuery>);
    mockRouter(<CardList />);

    expect(screen.getByTestId('error')).toBeInTheDocument();
    expect(screen.getByText('Ops, something went wrong')).toBeInTheDocument();
  });
});
