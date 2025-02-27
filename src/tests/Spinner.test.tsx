import { render, screen } from '@testing-library/react';
import Spinner from '../components/Spinner/Spinner';

describe('Spinner Component', () => {
  it('renders correctly with the spinner element', () => {
    render(<Spinner />);

    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement.tagName).toBe('DIV');
  });
});
