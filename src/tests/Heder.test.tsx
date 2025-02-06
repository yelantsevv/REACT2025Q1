import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';
import { mockState } from './mockData';
import { MemoryRouter } from 'react-router';

describe('Header Component', () => {
  it('renders Search and Paginator components', () => {
    render(
      <MemoryRouter>
        <Header {...mockState} />
      </MemoryRouter>
    );
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.getByTestId('paginator')).toBeInTheDocument();
  });
});
