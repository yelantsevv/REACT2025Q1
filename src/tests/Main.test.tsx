import { describe, it, expect } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import About from '../components/About/About';
import NotFound from '../components/NotFound/NotFound';
import { mockRouter } from './mockRouter';
import App from '../App';

describe('Main Routing', () => {
  it('renders the App component for the root path', () => {
    mockRouter(<App />, '/');
    const theme = screen.getByTestId('theme');
    const themeBtn = screen.getByTestId('theme-btn');

    expect(theme.className).toMatch(/light/);
    expect(themeBtn).toBeInTheDocument();
    fireEvent.click(themeBtn);
    expect(theme.className).toMatch(/dark/);
  });

  it('renders the About component for a dynamic ID route', () => {
    mockRouter(<About />, 'about');
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.getByTestId('about-loading')).toBeInTheDocument();
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(2);
  });

  it('renders NotFound component for an unknown route', () => {
    mockRouter(<NotFound />, 'random');
    expect(
      screen.getByText('Sorry, the page is Not Found')
    ).toBeInTheDocument();
  });
});
