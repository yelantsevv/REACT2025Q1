import { fireEvent, screen } from '@testing-library/react';
import ErrorButton from '../components/ErrorButton/ErrorButton';
import { mockRouter } from './mockRouter';

describe('ErrorButton Component', () => {
  it('renders correctly', () => {
    mockRouter(<ErrorButton />);
    const button = screen.getByText('Error Button');
    expect(button).toBeInTheDocument();
  });

  it('throws an error when clicked', () => {
    console.error = vi.fn();
    mockRouter(<ErrorButton />);

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
