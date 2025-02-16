import { CustomLink } from '../components';
import { mockRouter } from './mockRouter';
import { useLocalStorage } from '../hooks';

const setValueMock = vi.fn();
vi.mock('../hooks', () => ({
  useLocalStorage: vi.fn(),
}));

describe('CustomLink Component', () => {
  it('renders correctly', () => {
    vi.mocked(useLocalStorage).mockReturnValue(['', setValueMock]);
    mockRouter(<CustomLink search="?page=1" item="1" />);
    const link = screen.getByTestId('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/?page=1');
    fireEvent.click(link);
    expect(setValueMock).toHaveBeenCalledWith('/?page=1');
  });

  it('does not call setValue when search is empty', () => {
    vi.mocked(useLocalStorage).mockReturnValue(['', setValueMock]);
    mockRouter(<CustomLink search="" item="1" />);
    const link = screen.getByTestId('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
    fireEvent.click(link);
    expect(setValueMock).not.toHaveBeenCalledWith();
  });
});
