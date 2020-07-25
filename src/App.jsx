import React from 'react';
import './App.scss';
// import { ErrorBoundary } from 'react-error-boundary';
// import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import useSWR from 'swr';

const url =
  'https://32f2jzoot4.execute-api.us-east-1.amazonaws.com/default/fe-takehome-api';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const App = () => {

  //---------
  // const { data, error } = useSWR(url, fetcher);

  // // if (data && data.message === 'Server error') {
  // //   // throw new Error('Whoops, there was a server-side 500 error')
  // //   throw new Error('Whoops, there was a server-side 500 error')
  // // }
  // // if (data && data.message === 'Client error') {
  // //   // throw new Error('Whoops, there was a client-side 400 error')
  // //   throw new Error('Whoops, there was a client-side 400 error')
  // // }

  // if (error) return <div>Whoops. There was an error.</div>;
  // if (!data) return <div>Loading...</div>;

  // // handle server error
  // if (data && data.message === 'Server error')
  //   return (
  //     <div>
  //       Whoops, there was a <strong className="strong">{data.message}</strong>.
  //       Please reload the page.
  //     </div>
  //   );
  // // handle client error
  // if (data && data.message === 'Client error')
  //   return (
  //     <div>
  //       Whoops, there was a <strong className="strong">{data.message}</strong>.
  //       Please reload the page.
  //     </div>
  //   );

  //---------

  // success: render data
  // return <div>✅Your data has been submitted successfully. Thank you</div>

  return (
    <div className="App">

      <img src={'https://via.placeholder.com/600'} alt="placeholder"/>

      <form>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" autoComplete="email" />
        

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" autoComplete="new-password" />

        <label htmlFor="password">Confirm Password</label>
        <input type="password" name="password" id="password" autoComplete="new-password" />


        <label htmlFor="pet-name">Pet Name</label>
        <input type="text" name="pet-name" id="pet-name" autoComplete="on" />

        <label htmlFor="pet-weight">Pet Weight</label>
        <input type="text" name="pet-weight" id="pet-weight" autoComplete="on" />


        <input type="button" value="SUBMIT" />

      </form>

    </div>
  );
};

export default App;
