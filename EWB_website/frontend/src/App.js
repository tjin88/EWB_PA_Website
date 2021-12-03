import './App.css';
import canadianFlag from './images/canada.png';

function App() {
  // Write js functions here
  

  // The return statement will mainly comprise of HTML
  return (
    <div className="App">
      <div className="app__body">
      <img className = "canadianFlag" src={canadianFlag} alt = "Canadian Parties"/>
      <img className = "canadianFlag2" src={canadianFlag} alt = "Canadian Parties"/>

      <p className = "text__header">EWB Canadian Party Alignment</p>
      </div>
    </div>
  );
}

export default App;
