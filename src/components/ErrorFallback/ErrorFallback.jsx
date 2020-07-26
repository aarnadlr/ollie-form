import React from 'react';
import PropTypes from 'prop-types';

function ErrorFallback({ error }) {
  return (
    <div className="error-fallback" role="alert">
      <p>Whoops, something went wrong:</p>
      <pre style={{ color: 'red' }}>{error && error.message}</pre>
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.object
};

export default ErrorFallback;
