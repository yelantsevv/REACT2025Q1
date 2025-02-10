import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Paginator from '../components/Paginator/Paginator';
import { MemoryRouter } from 'react-router';
import { act } from 'react';

vi.mock('../helpers', () => ({
  helper: {
    useSearchParams: vi.fn(() => ({ search: 'testSearch' })),
  },
}));

const pageLinkMock = vi.fn();
const renderWithRouter = (ui: React.ReactElement) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe('Paginator component', () => {
  it('renders the paginator component', () => {
    renderWithRouter(<Paginator />);
    const paginator = screen.getByTestId('paginator');
    expect(paginator).toBeInTheDocument();
  });

  it('renders the correct number of page links', () => {
    renderWithRouter(<Paginator />);
    const pageLinks = screen.getAllByRole('link');
    expect(pageLinks).toHaveLength(3);
  });

  it('renders prev and next links correctly', () => {
    renderWithRouter(<Paginator />);
    expect(screen.getByText('prev')).toHaveAttribute('href', '/?page=1');
    expect(screen.getByText('next')).toHaveAttribute('href', '/?page=2');
  });

  it('calls pageLink function on page click', async () => {
    renderWithRouter(<Paginator />);
    const pageTwo = screen.getByText('2');

    await act(async () => {
      fireEvent.click(pageTwo);
    });
    await waitFor(() => {
      expect(pageLinkMock).toHaveBeenCalledWith('?search=testSearch&page=2');
    });
  });
});
