import './App.css';
import canadianFlag from './images/canada.png';
import parties from './images/parties.png';

function App() {
  // Write js functions here
  

  // The return statement will mainly comprise of HTML
  return (
    <div className="App">
      <div className="app__body">
      <img className = "canadianFlagRight" src = {canadianFlag} alt = "Canadian Flag"/>

      <img className = "parties" src = {parties} alt = "Canadian Parties"/>

      <img className = "canadianFlagLeft" src = {canadianFlag} alt = "Canadian Flag"/>

      <p className = "text__header">EWB Canadian Party Alignment Quiz</p>

      <button className = "startButton"> Click here to Start </button>
      </div>
    </div>
  );
}

export default App;
