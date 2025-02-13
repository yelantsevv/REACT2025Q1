import { Search } from '../components';

const navigateMock = vi.fn();
const setQueryMock = vi.fn();

vi.mock('react-router', () => ({
  useNavigate: () => navigateMock,
}));

vi.mock('../helpers.ts', () => ({
  helper: {
    useSearchParams: () => ({ search: 'testSearch' }),
  },
}));

vi.mock('../hooks/useLocaleStorage.ts', () => ({
  useLocalStorage: () => ['testSearch', setQueryMock],
}));

vi.mock('../store/Redux/api', () => ({
  useGetPeopleListQuery: vi.fn(),
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

  it('calls navigate and setQuery', () => {
    const input = screen.getByTestId('input');
    const form = screen.getByTestId('search');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.submit(form);

    expect(setQueryMock).toHaveBeenCalledWith('?search=test');
    expect(navigateMock).toHaveBeenCalledWith('?search=test');
  });

  it('calls navigate and setQuery with empty value', () => {
    const input = screen.getByTestId('input');
    const form = screen.getByTestId('search');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.submit(form);

    expect(setQueryMock).toHaveBeenCalledWith('?search=');
    expect(navigateMock).toHaveBeenCalledWith('?search=');
  });
});
