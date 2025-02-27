import { fireEvent, screen } from '@testing-library/react';
import CustomLink from '../components/CustomLink/CustomLink';
import { mockRouter } from './mockRouter';

describe('CustomLink Component', () => {
  it('renders correctly', () => {
    mockRouter(<CustomLink search="?page=1" item="1" />);
    const link = screen.getByTestId('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/?page=1');
    fireEvent.click(link);
  });

  it('does not call setValue when search is empty', () => {
    mockRouter(<CustomLink search="" item="1" />);
    const link = screen.getByTestId('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
    fireEvent.click(link);
  });
});
