import { Spinner } from '../components';
import { mockRouter } from './mockRouter';

describe('Spinner Component', () => {
  it('renders correctly with the spinner element', () => {
    mockRouter(<Spinner />);

    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement.tagName).toBe('DIV');
  });
});
