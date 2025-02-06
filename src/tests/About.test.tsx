import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router';
import About from '../components/About/About';
import { getData } from '../api';
import { mockResults } from './mockData';

vi.mock('../api', () => ({
  getData: vi.fn(),
  URL: 'https://swapi.dev/api/people/1/',
  id: '1',
}));
vi.mock('../components', () => ({
  Film: vi.fn(() => <div data-testid="film" />),
}));

vi.mock('../helpers', () => ({
  helper: {
    useParams: vi.fn().mockReturnValue('1'),
    query: vi.fn().mockReturnValue('?search=test'),
  },
}));

describe('About Component', () => {
  it('should render loading spinner', async () => {
    vi.mocked(getData).mockResolvedValueOnce(undefined);

    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    await waitFor(() => {
      const about = screen.getByTestId('about');
      expect(about).toBeInTheDocument();
      expect(about.tagName).toBe('DIV');
      expect(about.className).toMatch(/container/);
      const links = screen.getAllByRole('link');
      expect(links.length).toBe(2);
      expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });
  });

  it('should render character details', async () => {
    vi.mocked(getData).mockResolvedValueOnce(mockResults);

    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getByText(':Luke Skywalker')).toBeInTheDocument()
    );
    expect(screen.getByText(':male')).toBeInTheDocument();
  });

  it('renders a list of films', async () => {
    vi.mocked(getData).mockResolvedValue({
      ...mockResults,
      films: ['film1', 'film2', 'film3'],
    });

    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    await waitFor(() => {
      const filmElements = screen.getAllByTestId('loading-film');
      expect(filmElements.length).toBe(3);
    });
  });
});
