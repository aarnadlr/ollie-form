import React, { useState, useEffect } from 'react';
import './App.scss';
import Form from './components/Form/Form';
import Response from './components/Response/Response';

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

  // handle errors: display a success or error message
  if (
    fetchResponse &&
    fetchResponse.data
  ) {
    return (
      <Response data={fetchResponse.data} setFetchResponse={setFetchResponse} />
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
