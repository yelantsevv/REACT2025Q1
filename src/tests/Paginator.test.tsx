import { screen } from '@testing-library/react';
import Paginator from '../components/Paginator/Paginator';
import { mockPerson } from './mockData';
import { mockRouter } from './mockRouter';

vi.mock('../components/CustomLink/CustomLink', () => ({
  default: vi.fn(({ search }) => <div data-testid="custom-link">{search}</div>),
}));

describe('Paginator Component', () => {
  it('render paginator', () => {
    mockRouter(<Paginator data={mockPerson} page="films" />);
    expect(screen.getByTestId('paginator')).toBeInTheDocument();
  });

  it('render links', () => {
    mockRouter(<Paginator data={mockPerson} page="films" />);
    const links = screen.getAllByTestId('custom-link');
    expect(links).toHaveLength(5);
  });
});
