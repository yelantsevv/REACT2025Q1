import { About } from '../components';
import { mockResults } from './mockData';
import { mockRouter } from './mockRouter';
import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
vi.mock('../components/Film/Film', () => ({
  default: vi.fn(() => <div data-testid="film-component" />),
}));
vi.mock('../components/About/Back', () => ({
  default: vi.fn(() => <div data-testid="back-component" />),
}));

describe('About Component', () => {
  it('renders a list of films', async () => {
    mockRouter(await About({ people: mockResults }));

    const filmElements = screen.getAllByTestId('film-component');
    expect(filmElements.length).toBe(3);
    const backElements = screen.getAllByTestId('back-component');
    expect(backElements.length).toBe(2);
  });
});
