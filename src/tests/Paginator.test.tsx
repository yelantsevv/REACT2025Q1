import { describe, expect, it, vi } from 'vitest';
import { Paginator } from '../components';
import { mockPerson } from './mockData';
import Link from 'next/link';
import { render, screen } from '@testing-library/react';

vi.mock('../components/CustomLink/CustomLink', () => ({
  default: vi.fn(() => (
    <Link href={'custom-link'} data-testid="custom-link"></Link>
  )),
}));

vi.mock('next/router', () => ({
  useRouter: vi.fn(() => ({
    query: {
      search: 'testSearch',
    },
  })),
}));

describe('Paginator Component', () => {
  it('render paginator', () => {
    render(<Paginator {...mockPerson} search="testSearch" />);
    expect(screen.getByTestId('paginator')).toBeInTheDocument();
  });

  it('render links', () => {
    render(<Paginator {...mockPerson} search="testSearch" />);
    const links = screen.getAllByTestId('custom-link');
    expect(links).toHaveLength(5);
  });
});
