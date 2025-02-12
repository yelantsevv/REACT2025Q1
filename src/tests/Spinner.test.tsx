import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Spinner from '../components/Spinner/Spinner';
import { mockRouter } from './mockRouter';

describe('Spinner Component', () => {
  it('renders correctly with the spinner element', () => {
    mockRouter(<Spinner />);

    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement.tagName).toBe('DIV');
  });
});
