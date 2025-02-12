import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NotFound from '../components/NotFound/NotFound';
import { mockRouter } from './mockRouter';

describe('NotFound Component', () => {
  it('renders the Not Found message', () => {
    mockRouter(<NotFound />);
    expect(
      screen.getByText('Sorry, the page is Not Found')
    ).toBeInTheDocument();
  });

  it('renders the GO HOME link', () => {
    mockRouter(<NotFound />);
    const link = screen.getByText('GO HOME');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
