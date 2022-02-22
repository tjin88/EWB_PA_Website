import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';
import Test from './pages/test';
import ResultsPage from './pages/ResultsPage';


ReactDOM.render(
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>,
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/QuestionPage" element={<QuestionPage />} />
      <Route path="/test" element={<Test />} />
      <Route path="/ResultsPage" element={<ResultsPage />} />
    </Routes>
    {/* <Footer /> */}
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
