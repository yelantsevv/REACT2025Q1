import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import RootLayout from '../app/layout';

vi.mock('../components/Search/Search', () => ({
  default: vi.fn(() => <div data-testid="search-component" />),
}));
vi.mock('../components/Selected/Selected', () => ({
  default: vi.fn(() => <div data-testid="selected-component" />),
}));
vi.mock('../components/ErrorButton/ErrorButton', () => ({
  default: vi.fn(() => <div data-testid="error-button-component" />),
}));

vi.mock('next/font/google', () => ({
  Inter: vi.fn(() => ({ className: 'inter' })),
}));

describe('RootLayout Component', () => {
  it('renders correctly with children and about', () => {
    render(
      <RootLayout about={<div data-testid="about-component" />}>
        <div data-testid="children-component" />
      </RootLayout>
    );
    expect(screen.getByTestId('search-component')).toBeInTheDocument();
    expect(screen.getByTestId('selected-component')).toBeInTheDocument();
    expect(screen.getByTestId('error-button-component')).toBeInTheDocument();
    expect(screen.getByTestId('theme-btn')).toBeInTheDocument();
    expect(screen.getByTestId('about-component')).toBeInTheDocument();
    expect(screen.getByTestId('children-component')).toBeInTheDocument();
  });
});
