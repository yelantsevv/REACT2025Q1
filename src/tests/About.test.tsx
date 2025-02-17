import { About } from '../components';
import { mockResults } from './mockData';
import { mockRouter } from './mockRouter';
import { useRouter } from 'next/router';

vi.mock('../components/Film/Film', () => ({
  default: vi.fn(() => <div data-testid="film-component" />),
}));
vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

describe('About Component', () => {
  it('renders a list of films', async () => {
    vi.mocked(useRouter).mockReturnValueOnce({
      query: { page: '1' },
    } as unknown as ReturnType<typeof useRouter>);
    mockRouter(<About people={mockResults} />);

    const filmElements = screen.getAllByTestId('film-component');
    expect(filmElements.length).toBe(3);
  });
});
