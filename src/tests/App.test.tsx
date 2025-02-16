import { mockRouter } from './mockRouter.tsx';
import { useSelector } from 'react-redux';
import App from '../App.tsx';

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
vi.mock('../components/Search/Search.tsx', () => ({
  default: vi.fn(() => <div data-testid="Search" />),
}));
vi.mock('../components/Paginator/Paginator.tsx', () => ({
  default: vi.fn(() => <div data-testid="Paginator" />),
}));
vi.mock('../components/CardList/CardList.tsx', () => ({
  default: vi.fn(() => <div data-testid="CardList" />),
}));
vi.mock('../components/ErrorButton/ErrorButton.tsx', () => ({
  default: vi.fn(() => <div data-testid="ErrorButton" />),
}));

describe('CardList Component', () => {
  it('renders a list of cards when results are provided', async () => {
    vi.mocked(useSelector).mockReturnValue({
      choice: [{ name: 'Luke' }, { name: 'Skywalker' }],
    });
    mockRouter(<App />);
    const cards = screen.getAllByText('Delete');
    expect(cards).toHaveLength(2);
    expect(screen.getByText('Luke')).toBeInTheDocument();
  });
});
