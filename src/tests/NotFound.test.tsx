import { NotFoundPage } from '../components';
import { mockRouter } from './mockRouter';

describe('NotFound Component', () => {
  it('renders the Not Found message', () => {
    mockRouter(<NotFoundPage />);
    expect(
      screen.getByText('Sorry, the page is Not Found')
    ).toBeInTheDocument();
  });

  it('renders the GO HOME link', () => {
    mockRouter(<NotFoundPage />);
    const link = screen.getByText('GO HOME');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
