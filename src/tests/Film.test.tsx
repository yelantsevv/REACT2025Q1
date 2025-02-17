import { Film } from '../components';
import { mockFilms } from './mockData';
import { mockRouter } from './mockRouter';

describe('Film Component with RTK Query', () => {
  it('renders film data correctly', async () => {
    mockRouter(<Film film={mockFilms} />);

    expect(screen.getByText(mockFilms.title)).toBeInTheDocument();
    expect(screen.getByText(`: ${mockFilms.director}`)).toBeInTheDocument();
    expect(screen.getByText(`: ${mockFilms.producer}`)).toBeInTheDocument();
  });
});
