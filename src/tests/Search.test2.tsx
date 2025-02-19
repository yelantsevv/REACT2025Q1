import { Search } from '../components';
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
const navigateMock = vi.fn();
const setQueryMock = vi.fn();

vi.mock('../hooks/useLocaleStorage.ts', () => ({
  useLocalStorage: () => ['testSearch', setQueryMock],
}));
// vi.mock('next/router', () => ({
//   useRouter: () => ({
//     query: {
//       search: 'testSearch',
//     },
//     push: navigateMock,
//   }),
// }));

describe('Search Component', () => {
  it('renders correctly', () => {
    render(<Search />);
    const form = screen.getByTestId('search');
    const input = screen.getByTestId('input');
    const button = screen.getByText('Search');

    expect(form).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('testSearch');
    expect(button).toBeInTheDocument();
  });

  it('calls navigate and setQuery', () => {
    render(<Search />);
    const input = screen.getByTestId('input');
    const form = screen.getByTestId('search');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.submit(form);

    expect(setQueryMock).toHaveBeenCalledWith('?search=test');
    expect(navigateMock).toHaveBeenCalledWith('?search=test');
  });

  it('calls navigate and setQuery with empty value', () => {
    render(<Search />);
    const input = screen.getByTestId('input');
    const form = screen.getByTestId('search');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.submit(form);

    expect(setQueryMock).toHaveBeenCalledWith('?search=');
    expect(navigateMock).toHaveBeenCalledWith('?search=');
  });
});
