import React from 'react';

export default function Response({ data, setFetchResponse }) {
  return (
    <div
      className={`response ${
        data.success === true ? 'response--success' : 'response--error'
      }`}
    >
      <div className="message">
        <span role="img" aria-label="emoji">
          {`${data.success === true ? '✅' : '😕'}`}
        </span>
        {data.success === true ? (
          <span> Success! Your values have been received. Thank you!</span>
        ) : (
          <>
            <span>
              {' '}
              Whoops, there was a{' '}
              <strong className="strong">{data.message}</strong>. Please reload
              the page or click below.
            </span>
            <button
              onClick={()=>setFetchResponse({
                status: 'initial',
                data: null,
              })}
            >
              TRY AGAIN
            </button>
          </>
        )}
      </div>
    </div>
  );
}
