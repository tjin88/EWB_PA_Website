import './ResultsPage.css';

function ResultsPage() {
    // Write js functions here
    
    // The return statement will mainly comprise of HTML
    return (
      <div className="ResultsPage">
        <div className="ResultsPage__body">
          <h1 className="Header"> RESULTS </h1>
          <h3 className="subTitle"> Hover over the bar to see which questions led to these results</h3>
          <p className="rectangleBarGreen"></p>
          <p className="rectangleBarBloc"></p>
          <p className="rectangleBarLiberal"></p>
          <p className="rectangleBarConservative"></p>
          <p className="rectangleBarPPC"></p>
          <p className="rectangleBarNDP"></p>           
        </div>
      </div>
    );
  }

export default ResultsPage;
