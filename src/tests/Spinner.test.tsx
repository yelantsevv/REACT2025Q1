import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Spinner from '../components/Spinner/Spinner';

describe('Spinner Component', () => {
  it('renders correctly with the spinner element', () => {
    render(<Spinner />);

    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement.tagName).toBe('DIV');
  });
});
