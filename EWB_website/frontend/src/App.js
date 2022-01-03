import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import test from './pages/test';

function App () {
  // Write js functions here
  // const changePage = () => {
  //   return (
  //     <test/>
  //   );
  // }

  // The return statement will mainly comprise of HTML
  return (
    <div className="App">
      {/* <h1>HECK YEAH LET'S DO THIS</h1> */}
      {/* <Component {...pageProps}/> */}
      <HomePage/>
    </div>
  );
}

export default App;
