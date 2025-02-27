import { fireEvent, render, screen } from '@testing-library/react';
import Search from '../components/Search/Search';

const navigateMock = vi.fn();

vi.mock('react-router', () => ({
  useNavigate: () => navigateMock,
}));

vi.mock('../helpers.ts', () => ({
  helper: {
    useSearchParams: () => ({ search: 'testSearch' }),
  },
}));

beforeEach(() => {
  render(<Search />);
});

describe('Search Component', () => {
  it('renders correctly', () => {
    const form = screen.getByTestId('search');
    const input = screen.getByTestId('input');
    const button = screen.getByText('Search');

    expect(form).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('testSearch');
    expect(button).toBeInTheDocument();
  });

  it('changes input value', () => {
    const input = screen.getByTestId('input');

    fireEvent.change(input, { target: { value: 'Luke Skywalker' } });
    expect(input).toHaveValue('Luke Skywalker');
  });
});
