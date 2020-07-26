import React from 'react';
import { render } from '@testing-library/react';
import Response from './Response';

test('Response is in the document', () => {
  const { container } = render(<Response />);
  expect(container.firstChild).toBeInTheDocument();
});

test('Response is visible', () => {
  const { container } = render(<Response />);
  expect(container.firstChild).toBeVisible();
});

test('Response parent element has class "response"', () => {
  const { container } = render(<Response />);
  expect(container.firstChild).toHaveClass('response');
});

test('Success emoji renders', () => {
  const { getByRole } = render(<Response data={{ success: true }} />);
  expect(getByRole('img')).toHaveTextContent('✅');
});

test('Error emoji renders', () => {
  const { getByRole } = render(<Response data={{ success: false }} />);
  expect(getByRole('img')).toHaveTextContent('😕');
});
