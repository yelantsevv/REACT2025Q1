import { render, screen } from '@testing-library/react';
import SidebarLayout from '../../app/routes/layout';
import { mockPerson } from './mockData';

vi.mock('react-router', () => ({
  useLoaderData: vi.fn(() => ({
    data: mockPerson,
    page: '',
  })),
  Outlet: vi.fn(() => <p>test Outlet</p>),
}));
vi.mock('../components/Card/Card', () => ({
  default: vi.fn(() => <div data-testid="card-component" />),
}));
vi.mock('../components/Paginator/Paginator', () => ({
  default: vi.fn(() => <div data-testid="paginator-component" />),
}));

describe('SidebarLayout Component', () => {
  it('renders cards with correct data', async () => {
    render(<SidebarLayout />);
    const paginator = screen.getByTestId('paginator-component');
    expect(paginator).toBeInTheDocument();
    const card = screen.getAllByTestId('card-component');
    expect(card.length).toBe(3);
    expect(screen.getByText('test Outlet')).toBeInTheDocument();
  });
});
