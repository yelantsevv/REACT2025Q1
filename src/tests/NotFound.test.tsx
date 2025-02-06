import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router';
import { NotFound } from '../components';

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe('NotFound', () => {
  it('renders the Not Found message', () => {
    renderWithRouter(<NotFound />);
    expect(
      screen.getByText('Sorry, the page is Not Found')
    ).toBeInTheDocument();
  });

  it('renders the GO HOME link', () => {
    renderWithRouter(<NotFound />);
    const link = screen.getByText('GO HOME');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
