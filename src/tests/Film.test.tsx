import { screen } from '@testing-library/react';
import Film from '../components/Film/Film';
import { mockFilms } from './mockData';
import { mockRouter } from './mockRouter';

describe('Film Component with RTK Query', () => {
  it('renders film data correctly', async () => {
    mockRouter(<Film data={mockFilms} />);

    expect(screen.getByText(mockFilms.title)).toBeInTheDocument();
    expect(screen.getByText(`: ${mockFilms.director}`)).toBeInTheDocument();
    expect(screen.getByText(`: ${mockFilms.producer}`)).toBeInTheDocument();
  });
});
