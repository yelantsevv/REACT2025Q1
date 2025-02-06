import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Paginator from '../components/Paginator/Paginator';
import { MemoryRouter } from 'react-router';
import { mockPerson, mockState } from './mockData';

vi.mock('../helpers', () => ({
  helper: {
    useSearchParams: vi.fn(() => ({ search: 'testSearch' })),
  },
}));

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe('Paginator component', () => {
  const pageLinkMock = vi.fn();

  it('renders the paginator component', () => {
    renderWithRouter(
      <Paginator
        {...mockState}
        count={30}
        previous={null}
        next={null}
        pageLink={pageLinkMock}
      />
    );
    const paginator = screen.getByTestId('paginator');
    expect(paginator).toBeInTheDocument();
  });

  it('renders the correct number of page links', () => {
    renderWithRouter(
      <Paginator {...mockState} {...mockPerson} pageLink={pageLinkMock} />
    );
    const pageLinks = screen.getAllByRole('link');
    expect(pageLinks).toHaveLength(3);
  });

  it('renders prev and next links correctly', () => {
    renderWithRouter(
      <Paginator {...mockState} {...mockPerson} pageLink={pageLinkMock} />
    );
    expect(screen.getByText('prev')).toHaveAttribute('href', '/?page=1');
    expect(screen.getByText('next')).toHaveAttribute('href', '/?page=2');
  });

  it('calls pageLink function on page click', () => {
    renderWithRouter(
      <Paginator
        {...mockState}
        count={30}
        previous={null}
        next={null}
        pageLink={pageLinkMock}
      />
    );
    const pageTwo = screen.getByText('2');
    pageTwo.click();
    expect(pageLinkMock).toHaveBeenCalledWith('?search=testSearch&page=2');
  });
});
