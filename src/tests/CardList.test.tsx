import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CardList from '../components/CardList/CardList';
import { mockResults, mockState } from './mockData';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import choice from '../store/features/choiceSlice';

vi.mock('../components/Card/Card.tsx', () => ({
  default: vi.fn(() => <div data-testid="card" />),
}));
vi.mock('../components/Spinner/Spinner.tsx', () => ({
  default: vi.fn(() => <div data-testid="spinner" />),
}));

const mockStore = configureStore({ reducer: { choice } });

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<Provider store={mockStore}>{ui}</Provider>);
};

describe('CardList Component', () => {
  it('renders a spinner when loading', () => {
    renderWithProvider(<CardList {...mockState} isLoading={true} />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('renders no results message when results are empty', () => {
    renderWithProvider(
      <CardList {...mockState} results={[]} isLoading={false} />
    );

    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  it('renders a list of cards when results are provided', () => {
    renderWithProvider(
      <CardList
        {...mockState}
        isLoading={false}
        results={[mockResults, mockResults]}
      />
    );
    expect(screen.getAllByTestId('card')).toHaveLength(2);
  });
});
