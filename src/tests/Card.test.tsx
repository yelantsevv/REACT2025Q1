import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Card from '../components/Card/Card.tsx';
import { describe, it, expect } from 'vitest';
import { mockResults } from './mockData.ts';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import choice from '../store/Redux/features/choiceSlice.ts';

const mockStore = configureStore({ reducer: { choice } });

describe('Card Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Provider store={mockStore}>
          <Card {...mockResults} />
        </Provider>
      </MemoryRouter>
    );
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
});
