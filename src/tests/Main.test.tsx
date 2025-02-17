import Home from '../pages/index';
import { useRouter } from 'next/router';
import { useTheme } from '../hooks/useTheme';
import { mockRouter } from './mockRouter';
import { mockPerson, mockResults } from './mockData';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

vi.mock('../hooks/useTheme', () => ({
  useTheme: vi.fn(),
}));

describe('Home Page', () => {
  let routerMock: ReturnType<typeof useRouter>;
  let themeMock: ReturnType<typeof useTheme>;

  beforeEach(() => {
    routerMock = {
      asPath: '/',
      query: {},
      events: {
        on: vi.fn(),
        off: vi.fn(),
      },
    } as unknown as ReturnType<typeof useRouter>;
    vi.mocked(useRouter).mockReturnValue(routerMock);

    themeMock = {
      theme: 'light',
      toggleTheme: vi.fn(),
    };
    vi.mocked(useTheme).mockReturnValue(themeMock);
  });

  it('renders correctly', () => {
    mockRouter(<Home person={mockPerson} people={mockResults} />);
    expect(screen.getByTestId('theme')).toBeInTheDocument();
    expect(screen.getByTestId('theme-btn')).toBeInTheDocument();
    expect(screen.getByTestId('paginator')).toBeInTheDocument();
    expect(screen.getByText('Error Button')).toBeInTheDocument();
  });

  it('renders About component if query.id exists', () => {
    routerMock.query.id = '1';

    mockRouter(<Home person={mockPerson} people={mockResults} />);
    expect(screen.getByTestId('about')).toBeInTheDocument();
  });
});
