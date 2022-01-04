import React, { useState, useEffect } from 'react';
import './QuestionPage.css';

var Questions = ["Q1","Q2","Q3","Q4"]
var Answers = []

function QuestionPage() {
  // Write js functions here
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });


  // The return statement will mainly comprise of HTML
  return (
    <div className="QuestionPage">
      <div className="QuestionPage__body">
          {/* <h1>WORKING??????</h1> */}
          <h1 className="rectangle">
              {Questions[count]}
          </h1>
          <ul className="list">
              <li> 
                  <button onClick={() => setCount(count + 1)} className="listItem">Option 1: Strongly Agree</button>
              </li>
              <li className="listItem">
                  <p>Option 2: Agree</p>
              </li>
              <li className="listItem">
                  <p>Option 3: Unsure </p>
              </li>
              <li className="listItem">
                  <p>Option 4: Disagree</p>
              </li>
              <li className="listItem">
                  <p>Option 5: Strongly Disagree</p>
              </li>
          </ul>
      </div>
    </div>
  );
}

export default QuestionPage;
