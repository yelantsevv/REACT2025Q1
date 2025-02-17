import { Paginator } from '../components';
import { mockPerson } from './mockData';
import Link from 'next/link';

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
    render(<Paginator {...mockPerson} />);
    expect(screen.getByTestId('paginator')).toBeInTheDocument();
  });

  it('render links', () => {
    render(<Paginator {...mockPerson} />);
    const links = screen.getAllByTestId('custom-link');
    expect(links).toHaveLength(5);
  });
});
