import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Component is in the document', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toBeInTheDocument();
});

test('Component is visible', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toBeVisible();
});

test('Component has class "App"', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass('App');
});
