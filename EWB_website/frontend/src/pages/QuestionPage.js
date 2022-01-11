import React, { useState, useEffect } from 'react';
import './QuestionPage.css';

var Questions = ["Q1","Q2","Q3","Q4"]
var Answers = []

function QuestionPage() {
  // Write js functions here
  const [count, setCount] = useState(-1);
  const [option, setOption] = useState(-1);

  useEffect(() => () => {
    // document.title = `You clicked ${count} times`;
    Answers[count] = option;
    console.log("Answers: " + Answers + ", count: " + count);

    if (count === (Questions.length - 1)) {
        window.location.replace("/ResultsPage");
    }

  }, [option, count]);


  // The return statement will mainly comprise of HTML
  return (
    <div className="QuestionPage">
      <div className="QuestionPage__body">
          {/* <h1>WORKING??????</h1> */}
          <h1 className="rectangle">
              {count === -1 
              ? "Click any button to start" 
              : Questions[count]}
              {/* {Answers} */}
          </h1>
          <ul className="list">
              <li> 
                <button onClick={() => {setOption(1); setCount(count + 1);}} className="listItem">Option 1: Strongly Agree</button>
                  {/* <button onClick={buttonClicked(1)} className="listItem">Option 1: Strongly Agree</button> */}
              </li>
              <li> 
                <button onClick={() => {setOption(2); setCount(count + 1);}} className="listItem">Option 2: Agree</button>
                  {/* <p>Option 2: Agree</p> */}
              </li>
              <li> 
                <button onClick={() => {setOption(3); setCount(count + 1);}} className="listItem">Option 3: Unsure</button>
                  {/* <p>Option 3: Unsure </p> */}
              </li>
              <li> 
                <button onClick={() => {setOption(4); setCount(count + 1);}} className="listItem">Option 4: Disagree</button>
                  {/* <p>Option 4: Disagree</p> */}
              </li>
              <li> 
                <button onClick={() => {setOption(5); setCount(count + 1);}} className="listItem">Option 5: Strongly Disagree</button>
                  {/* <p>Option 5: Strongly Disagree</p> */}
              </li>
          </ul>
      </div>
    </div>
  );
}

export default QuestionPage;
