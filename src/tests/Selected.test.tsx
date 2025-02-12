import { screen, fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Selected from '../components/Selected/Selected';
import { useSelector, useDispatch } from 'react-redux';
import { del, clear } from '../store/Redux/features/choiceSlice';

vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
  useDispatch: vi.fn(),
}));

const mockDispatch = vi.fn();

beforeEach(() => {
  vi.mocked(useSelector).mockReturnValue({
    choice: [{ name: 'Luke' }, { name: 'Skywalker' }],
  });

  vi.mocked(useDispatch).mockReturnValue(mockDispatch);

  render(<Selected />);
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('Selected Component', () => {
  it('renders correctly', () => {
    expect(screen.getByText('Luke')).toBeInTheDocument();
    expect(screen.getByText('Skywalker')).toBeInTheDocument();
    expect(screen.getByText('2 items are selected')).toBeInTheDocument();
    expect(screen.getByText('Download as CSV')).toBeInTheDocument();
  });

  it('calls dispatch', () => {
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);
    expect(mockDispatch).toHaveBeenCalledWith(del('Luke'));
  });

  it('calls dispatch  "Remove All"', () => {
    fireEvent.click(screen.getByText('Remove All'));
    expect(mockDispatch).toHaveBeenCalledWith(clear());
  });
});
