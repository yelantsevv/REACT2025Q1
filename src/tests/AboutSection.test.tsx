import { mockPerson } from './mockData';
import { mockRouter } from './mockRouter';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import AboutSection from '../app/@about/[section]/page';
vi.mock('../components/About/About', () => ({
  default: vi.fn(() => <div data-testid="About-component" />),
}));
vi.mock('../lib/api', () => ({
  getPeople: vi.fn(() => Promise.resolve(mockPerson)),
}));
vi.mock('next/navigation', () => ({
  notFound: vi.fn(),
}));

describe('About Component', () => {
  it('renders a list of films', async () => {
    mockRouter(
      await AboutSection({ params: Promise.resolve({ section: '1' }) })
    );
    const filmElements = screen.getByTestId('About-component');
    expect(filmElements).toBeInTheDocument();
  });
});
