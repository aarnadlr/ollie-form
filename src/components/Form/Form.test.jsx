import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';

test('Form is in the document', () => {
  const { container } = render(<Form />);
  expect(container.firstChild).toBeInTheDocument();
});

test('Form is visible', () => {
  const { container } = render(<Form />);
  expect(container.firstChild).toBeVisible();
});

test('Form parent element has class "Form"', () => {
  const { container } = render(<Form />);
  expect(container.firstChild).toHaveClass('Form');
});
