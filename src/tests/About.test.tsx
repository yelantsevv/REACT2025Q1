import { About } from '../components';
import { mockResults } from './mockData';
import { mockRouter } from './mockRouter';
import { useGetPeopleQuery } from '../store/Redux/api';

vi.mock(
  '../store/Redux/api',
  async (
    importOriginal: () => Promise<typeof import('../store/Redux/api')>
  ) => {
    const actual = await importOriginal();
    return {
      ...actual,
      useGetPeopleQuery: vi.fn(),
    };
  }
);

vi.mock('../components/Film/Film', () => ({
  default: vi.fn(() => <div data-testid="film-component" />),
}));

describe('About Component', () => {
  it('should render loading spinner', () => {
    vi.mocked(useGetPeopleQuery).mockReturnValueOnce({
      isLoading: true,
    } as unknown as ReturnType<typeof useGetPeopleQuery>);
    mockRouter(<About />);
    const about = screen.getByTestId('about-loading');
    expect(about).toBeInTheDocument();
    expect(about.tagName).toBe('DIV');
    expect(about.className).toMatch(/container/);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(2);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render character details', async () => {
    vi.mocked(useGetPeopleQuery).mockReturnValueOnce({
      error: true,
    } as unknown as ReturnType<typeof useGetPeopleQuery>);
    mockRouter(<About />);
    expect(screen.getByText('REDIRECT')).toBeInTheDocument();
  });

  it('renders a list of films', async () => {
    vi.mocked(useGetPeopleQuery).mockReturnValueOnce({
      data: mockResults,
    } as unknown as ReturnType<typeof useGetPeopleQuery>);
    mockRouter(<About />);

    const filmElements = screen.getAllByTestId('film-component');
    expect(filmElements.length).toBe(3);
  });
});
