import { CustomLink } from '../components';
import { mockRouter } from './mockRouter';

const pageLinkMock = vi.fn();

describe('CustomLink Component', () => {
  it('renders correctly', () => {
    mockRouter(
      <CustomLink search="?page=1" pageLink={pageLinkMock} item="1" />
    );
    const link = screen.getByTestId('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/?page=1');
  });

  it('prevents navigation if search is empty', () => {
    mockRouter(<CustomLink search="" pageLink={pageLinkMock} item="prev" />);
    const link = screen.getByText('prev');
    fireEvent.click(link);
    expect(pageLinkMock).not.toHaveBeenCalled();
  });

  it('prevents navigation if search is empty', () => {
    mockRouter(<CustomLink search="" pageLink={pageLinkMock} item="next" />);
    const link = screen.getByText('next');
    fireEvent.click(link);
    expect(pageLinkMock).not.toHaveBeenCalled();
  });

  it('calls pageLink function on valid click', () => {
    mockRouter(
      <CustomLink search="?page=3" pageLink={pageLinkMock} item="3" />
    );
    const link = screen.getByText('3');
    fireEvent.click(link);
    expect(pageLinkMock).toHaveBeenCalledWith('?page=3');
  });
});
