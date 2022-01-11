import './ResultsPage.css';

function ResultsPage(_Answers) {
    // Write js functions here
    var answers = _Answers || [0];
  
    // The return statement will mainly comprise of HTML
    return (
      <div className="ResultsPage">
        <div className="ResultsPage__body">
          <h1 className="Header"> RESULTS </h1>
          <h3 className="subTitle"> Hover over the bar to see which questions led to these results</h3>
          <p className="rectangleBar"></p>
          {/* <p className="rectangleBar">{answers.map(a => a)}</p> */}
           
        </div>
      </div>
    );
  }

export default ResultsPage;

//test 