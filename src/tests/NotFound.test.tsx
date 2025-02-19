import { NotFoundPage } from '../components';
import { mockRouter } from './mockRouter';
import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
describe('NotFound Component', () => {
  it('renders the Not Found message', () => {
    mockRouter(<NotFoundPage />);
    expect(
      screen.getByText('Sorry, the page is Not Found')
    ).toBeInTheDocument();
  });

  it('renders the BACK link', () => {
    mockRouter(<NotFoundPage />);
    const link = screen.getByText('BACK');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
