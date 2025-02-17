import { CardList } from '../components';
import { mockRouter } from './mockRouter.tsx';
import { mockPerson } from './mockData.ts';

vi.mock('../components/Card/Card.tsx', () => ({
  default: vi.fn(() => <div data-testid="card" />),
}));

describe('CardList Component', () => {
  it('renders a list of cards when results are provided', async () => {
    mockRouter(<CardList people={mockPerson} />);
    const cards = screen.getAllByTestId('card');
    expect(cards).toHaveLength(3);
  });

  it('renders a list of cards when No results', async () => {
    mockRouter(<CardList people={{ ...mockPerson, results: [] }} />);
    expect(screen.getByText('No results')).toBeInTheDocument();
  });
});
