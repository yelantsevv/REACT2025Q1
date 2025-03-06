import { mockRouter } from './mockRouter';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Default from '../app/default';
import * as DefaultAbout from '../app/@about/default';

vi.mock('../app/page', () => ({
  default: vi.fn(() => <div data-testid="home-component" />),
}));

describe('Default Component', () => {
  it('renders without crashing', () => {
    mockRouter(<DefaultAbout.default />);
    const defaultElement = screen.queryByTestId('default');
    expect(defaultElement).toBeNull();
  });
  it('renders without crashing', async () => {
    const searchParams = Promise.resolve({ search: 'test', page: '1' });
    render(await Default({ searchParams }));
    const defaultElement = screen.queryByTestId('home-component');
    expect(defaultElement).toBeInTheDocument();
  });
});
