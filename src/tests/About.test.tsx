import { render, screen } from '@testing-library/react';
import AboutPage from '../components/About/About';
import { mockResults } from './mockData';
import About from '../../app/routes/about';
import type { Route } from '.react-router/types/app/routes/+types/about';
import Default from '../../app/routes/default';

vi.mock('../components/Film/Film', () => ({
  default: vi.fn(() => <div data-testid="film-component" />),
}));
vi.mock('react-router', () => ({
  NavLink: vi.fn(),
}));
vi.mock('../helpers.ts', () => ({
  helper: {
    query: () => 'testquery',
  },
}));

describe('About Component', () => {
  it('renders a list of films', async () => {
    render(<AboutPage data={mockResults} />);
    const filmElements = screen.getAllByTestId('film-component');
    expect(filmElements.length).toBe(1);
  });

  it('renders a list of films', async () => {
    render(
      About({ loaderData: { data: mockResults } } as Route.ComponentProps)
    );
    const filmElements = screen.getAllByTestId('film-component');
    expect(filmElements.length).toBe(1);
  });
  it('should not render if no data', () => {
    render(<Default />);
    expect(screen.queryByTestId('test')).not.toBeInTheDocument();
  });
});
