import { describe, expect, it } from 'vitest';
import * as Components from '../components';

const expectedComponents: Record<string, unknown> = {
  ErrorBoundary: Components.ErrorBoundary,
  ErrorButton: Components.ErrorButton,
  Search: Components.Search,
  CardList: Components.CardList,
  Card: Components.Card,
  Film: Components.Film,
  Spinner: Components.Spinner,
  Paginator: Components.Paginator,
  About: Components.About,
  CustomLink: Components.CustomLink,
  NotFoundPage: Components.NotFoundPage,
  Selected: Components.Selected,
};

describe('Component Exports', () => {
  Object.entries(expectedComponents).forEach(([name, component]) => {
    it(`should export ${name}`, () => {
      expect(component).toBeDefined();
    });
  });
});
