import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import App from '../App';
import { About, NotFound } from '../components';

describe('App Routing', () => {
  it('renders the App component for the root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </MemoryRouter>
    );
    const paginator = screen.getByTestId('paginator');
    expect(paginator).toBeInTheDocument();
  });

  it('renders the About component for a dynamic ID route', () => {
    render(
      <MemoryRouter initialEntries={['/12']}>
        <Routes>
          <Route path="/:id" element={<About />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('renders NotFound component for an unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/random']}>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText('Sorry, the page is Not Found')
    ).toBeInTheDocument();
  });
});
