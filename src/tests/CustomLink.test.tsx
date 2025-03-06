import { CustomLink } from '../components';
import { mockRouter } from './mockRouter';
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
const setQueryMock = vi.fn();

vi.mock('../hooks/useLocaleStorage.ts', () => ({
  useLocalStorage: () => ['testSearch', setQueryMock],
}));

vi.mock('next/navigation', () => ({
  useSearchParams: vi.fn(() => new URLSearchParams({ page: '1' })),
}));

describe('CustomLink Component', () => {
  it('renders correctly', () => {
    mockRouter(<CustomLink query="?page=1" item="1" />);
    const link = screen.getByTestId('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '?page=1');
  });

  it('prevents navigation if search is empty', () => {
    mockRouter(<CustomLink query="" item="prev" />);
    const link = screen.getByText('prev');
    fireEvent.click(link);
    expect(setQueryMock).toHaveBeenCalled();
  });

  it('prevents navigation if search is empty', () => {
    mockRouter(<CustomLink query="" item="next" />);
    const link = screen.getByText('next');
    fireEvent.click(link);
    expect(setQueryMock).toHaveBeenCalled();
  });
});
