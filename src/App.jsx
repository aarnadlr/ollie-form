import React, { useState, useEffect } from 'react';
import './App.scss';
import Form from './components/Form/Form';

const url =
  'https://32f2jzoot4.execute-api.us-east-1.amazonaws.com/default/fe-takehome-api';

const App = () => {
  const [fetchResponse, setFetchResponse] = useState({
    status: 'initial', // can be 'initial', 'pending' or 'complete'
    data: null,
  });

  const [formValues, setFormValues] = useState();

  const onSubmit = (data) => {
    // save user form values
    setFormValues(data);

    // set status to 'pending'
    setFetchResponse({
      ...fetchResponse,
      status: 'pending',
    });

    // send user data to server
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setFetchResponse({
          status: 'complete',
          data,
        });
      });
  };

  useEffect(() => {
    console.log('log formValues from useEffect:', formValues);
  }, [formValues]);

  // handle errors
  if (
    fetchResponse &&
    fetchResponse.data &&
    fetchResponse.data.success === false
  ) {
    return (
      <div className="response response--error">
        <div className="message">
          <span role="img" aria-label="sad face">
            😕
          </span>
          <span>
            {' '}
            Whoops, there was a{' '}
            <strong className="strong">{fetchResponse.data.message}</strong>.
            Please reload the page.
          </span>
        </div>
      </div>
    );
  }

  if (
    fetchResponse &&
    fetchResponse.data &&
    fetchResponse.data.success === true
  ) {
    return (
      <div className="response response--success">
        <div className="message">
          <span role="img" aria-label="green checkmark">
            ✅
          </span>
          <span> Success! Your values have been received. Thank you!</span>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <img src={'https://via.placeholder.com/600'} alt="placeholder" />
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default App;
