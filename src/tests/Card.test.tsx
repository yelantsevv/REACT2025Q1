import { Card } from '../components';
import { mockResults } from './mockData.ts';
import { mockRouter } from './mockRouter.tsx';

describe('Card Component', () => {
  beforeEach(() => {
    mockRouter(<Card {...mockResults} />);
  });

  it('renders with provided props', () => {
    const nameElement = screen.getByTestId('name');
    expect(nameElement.tagName).toBe('B');
    expect(screen.getByText(mockResults.name)).toBeInTheDocument();
    expect(
      screen.getByText(`gender: ${mockResults.gender}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`height: ${mockResults.height}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`mass: ${mockResults.mass}`)).toBeInTheDocument();
  });

  it('renders correct NavLink path', () => {
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href');
    expect(linkElement.tagName).toBe('A');
  });

  it('click on checkbox', () => {
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.keyDown(checkbox, {
      key: 'Enter',
      code: 'Enter',
    });
    expect(checkbox).not.toBeChecked();
  });
});
