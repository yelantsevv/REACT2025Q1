import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Search } from '../components';
import { mockState } from './mockData';

const pageLinkMock = vi.fn();
const navigateMock = vi.fn(() => Promise.resolve());

const props = {
  ...mockState,
  pageLink: pageLinkMock,
};
beforeEach(() => {
  vi.mock('../helpers', () => ({
    helper: {
      useSearchParams: vi.fn(() => ({ search: 'testSearch' })),
    },
  }));

  vi.mock('react-router', () => ({
    useNavigate: () => navigateMock,
  }));
  render(<Search {...props} />);
});

describe('Search', () => {
  it('renders the search form correctly', () => {
    const input = screen.getByPlaceholderText('Search...');
    const button = screen.getByText('Search');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button.className).toMatch(/button/);
  });

  it('uses the initial search value', () => {
    const input = screen.getByTestId('input');
    expect(input.getAttribute('value')).toBe('testSearch');
  });

  it('does navigate or call pageLink if the input is empty', () => {
    const input = screen.getByTestId('input');
    const button = screen.getByText('Search');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);

    expect(pageLinkMock).toHaveBeenCalled();
    expect(navigateMock).toHaveBeenCalled();
  });
});
