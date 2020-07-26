import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';

test('Component is in the document', () => {
  const { container } = render(<Form />);
  expect(container.firstChild).toBeInTheDocument();
});

test('Component is visible', () => {
  const { container } = render(<Form />);
  expect(container.firstChild).toBeVisible();
});

test('Component has class "Form"', () => {
  const { container } = render(<Form />);
  expect(container.firstChild).toHaveClass('Form');
});
