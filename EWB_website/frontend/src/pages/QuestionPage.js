import './QuestionPage.css';

function QuestionPage() {
  // Write js functions here
  

  // The return statement will mainly comprise of HTML
  return (
    <div className="QuestionPage">
      <div className="QuestionPage__body">
          {/* <h1>WORKING??????</h1> */}
          <h1 className="rectangle">
              Question 4: Pineapple does NOT belong on pizza
          </h1>
          <ul className="list">
              <li className="listItem"> 
                  <p className="listItemText">Option 1: Strongly Agree</p>
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
