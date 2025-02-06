import { describe, it, expect } from 'vitest';
import { ErrorButton, ErrorBoundary } from '../components';
import { fireEvent, render, screen } from '@testing-library/react';

describe('ErrorButton Component', () => {
  it('renders correctly', () => {
    render(<ErrorButton />);
    const button = screen.getByText('Error Button');
    expect(button).toBeInTheDocument();
  });

  it('throws an error when clicked', () => {
    console.error = vi.fn();

    render(
      <ErrorBoundary>
        <ErrorButton />
      </ErrorBoundary>
    );

    const button = screen.getByText('Error Button');
    fireEvent.click(button);

    expect(
      screen.getByText('Error Boundary: Triggered Error')
    ).toBeInTheDocument();

    const resetBtn = screen.getByTestId('reset');
    expect(resetBtn.textContent).toBe('Reset');
    expect(resetBtn).toBeInTheDocument();
    fireEvent.click(resetBtn);
    expect(resetBtn).not.toBeInTheDocument();
    expect(console.error).toHaveBeenCalled();
  });
});
