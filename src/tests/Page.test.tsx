import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';
vi.mock('../components/Paginator/Paginator', () => ({
  default: vi.fn(() => <div data-testid="Paginator-component" />),
}));
vi.mock('../components/CardList/CardList', () => ({
  default: vi.fn(() => <div data-testid="CardList-component" />),
}));
vi.mock('next/navigation', () => ({
  notFound: vi.fn(),
}));

describe('Page Component', () => {
  it('renders a list of films', async () => {
    const searchParams = Promise.resolve({ search: 'test', page: '1' });
    render(await HomePage({ searchParams }));
    const paginator = screen.getByTestId('Paginator-component');
    expect(paginator).toBeInTheDocument();
    const cardList = screen.getByTestId('CardList-component');
    expect(cardList).toBeInTheDocument();
  });
});
