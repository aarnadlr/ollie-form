import React from 'react';
import { render } from '@testing-library/react';
import ErrorFallback from './ErrorFallback';

test('ErrorFallback is in the document', () => {
  const { container } = render(<ErrorFallback />);
  expect(container.firstChild).toBeInTheDocument();
});

test('ErrorFallback has role "alert" ', () => {
  const { getByRole } = render(<ErrorFallback />);
  expect(getByRole('alert')).toBeInTheDocument();
});

test('ErrorFallback has className "error-fallback" ', () => {
  const { getByRole } = render(<ErrorFallback />);
  expect(getByRole('alert')).toHaveClass('error-fallback');
});

test('ErrorFallback renders the received error message" ', () => {
  const testProp = {
    message: 'this is a demo message'
  }
  const { getByText } = render(<ErrorFallback error={testProp} />);
  expect(getByText('this is a demo message')).toBeInTheDocument();
});

