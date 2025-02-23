import { Card } from '../components';
import { mockResults } from './mockData.ts';
import { useDispatch, useSelector } from 'react-redux';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
describe('Card Component', () => {
  vi.mock('react-redux', () => ({
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  }));

  vi.mock('next/navigation', () => ({
    useSearchParams: vi.fn(() => new URLSearchParams({ page: '1' })),
  }));

  beforeEach(() => {
    vi.mocked(useDispatch).mockReturnValue(vi.fn());
    vi.mocked(useSelector).mockReturnValue({
      choice: [{ name: 'Luke' }, { name: 'Skywalker' }],
    });
    render(<Card {...mockResults} />);
  });

  it('renders with provided props', () => {
    const nameElement = screen.getByTestId('name');
    expect(nameElement.tagName).toBe('B');
    expect(screen.getByText(mockResults.name)).toBeInTheDocument();
    expect(
      screen.getByText(`gender: ${mockResults.gender}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`height: ${mockResults.height}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`mass: ${mockResults.mass}`)).toBeInTheDocument();
  });

  it('renders correct NavLink path', () => {
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href');
    expect(linkElement.tagName).toBe('A');
  });

  it('click on checkbox', () => {
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    fireEvent.keyDown(checkbox, {
      key: 'Enter',
      code: 'Enter',
    });
    expect(checkbox).not.toBeChecked();
  });
});
