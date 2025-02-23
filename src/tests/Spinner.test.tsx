import { describe, expect, it } from 'vitest';
import { Spinner } from '../components';
import { mockRouter } from './mockRouter';
import { screen } from '@testing-library/react';
import Loading from '../app/loading';
import * as LoadingAbout from '../app/@about/[section]/loading';

describe('Spinner Component', () => {
  it('renders correctly with the spinner element', () => {
    mockRouter(<Spinner />);

    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement.tagName).toBe('DIV');
  });
});
describe('Spinner Component', () => {
  it('renders correctly with the spinner element', () => {
    mockRouter(<Loading />);

    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement.tagName).toBe('DIV');
  });
});
describe('Spinner Component', () => {
  it('renders correctly with the spinner element', () => {
    mockRouter(<LoadingAbout.default />);

    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement.tagName).toBe('DIV');
  });
});
