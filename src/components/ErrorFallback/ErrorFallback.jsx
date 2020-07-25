import React from 'react';

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Whoops, something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}
export default ErrorFallback;
