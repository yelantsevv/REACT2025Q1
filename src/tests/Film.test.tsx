import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Film from '../components/Film/Film';
import { getData } from '../api';
import { mockFilms } from './mockData';

vi.mock('../api', () => ({
  getData: vi.fn(() => Promise.resolve(mockFilms)),
}));

describe('Film Component', () => {
  it('renders loading state initially', async () => {
    render(<Film film="films/1/" />);
    await waitFor(() => {
      expect(screen.getByTestId('loading-film')).toBeInTheDocument();
    });
  });

  it('calls getData with the correct film URL', async () => {
    render(<Film film="/films/1/" />);
    await waitFor(() => {
      expect(getData).toHaveBeenCalledWith('/films/1/');
    });
  });

  it('renders film data correctly', async () => {
    render(<Film film="/films/1/" />);

    await waitFor(() => {
      expect(screen.getByText('The Empire Strikes Back')).toBeInTheDocument();
    });
    expect(screen.getByText(':Irvin Kershner')).toBeInTheDocument();
    expect(screen.getByText(':Gary Kurtz, Rick McCallum')).toBeInTheDocument();
  });
  it('displays error message if API call fails', async () => {
    vi.mocked(getData).mockRejectedValueOnce(new Error('API Error'));

    render(<Film film="/films/1/" />);

    await waitFor(() => {
      expect(screen.getByTestId('loading-film')).toBeInTheDocument();
    });

    expect(screen.getByText('Ops something went wrong')).toBeInTheDocument();
  });
});
