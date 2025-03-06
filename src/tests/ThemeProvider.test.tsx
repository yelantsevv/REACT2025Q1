import { act, render, screen } from '@testing-library/react';
import { ThemeProvider } from '../Theme/ThemeProvider';
import { ThemeContext } from '../Theme/ThemeContext';
import { useLocalStorage } from '../hooks';
import { mockRouter } from './mockRouter';
import { expect, it, vi } from 'vitest';
import { describe } from 'node:test';

vi.mock('../hooks', () => ({
  useLocalStorage: vi.fn(),
}));

describe('ThemeProvider', () => {
  it('renders children', () => {
    vi.mocked(useLocalStorage).mockReturnValueOnce(['light', vi.fn()]);
    mockRouter(<div data-testid="child-component">Test Child</div>);

    expect(screen.getByTestId('child-component')).toBeInTheDocument();
  });

  it('theme from localStorage', () => {
    const setStoredThemeMock = vi.fn();
    vi.mocked(useLocalStorage).mockReturnValue(['dark', setStoredThemeMock]);

    let themeValue;
    render(
      <ThemeContext.Consumer>
        {(value) => {
          themeValue = value?.theme;
          return null;
        }}
      </ThemeContext.Consumer>,
      { wrapper: ThemeProvider }
    );

    expect(themeValue).toBe('dark');
  });

  it('toggleTheme updates theme and calls localStorage setter', () => {
    const setStoredThemeMock = vi.fn();
    vi.mocked(useLocalStorage).mockReturnValue(['light', setStoredThemeMock]);

    let themeValue;
    let toggleThemeFn: (() => void) | undefined;

    render(
      <ThemeContext.Consumer>
        {(value) => {
          themeValue = value?.theme;
          toggleThemeFn = value?.toggleTheme;
          return null;
        }}
      </ThemeContext.Consumer>,
      { wrapper: ThemeProvider }
    );

    expect(themeValue).toBe('light');

    act(() => {
      toggleThemeFn?.();
    });

    expect(setStoredThemeMock).toHaveBeenCalledWith('dark');
  });
});
