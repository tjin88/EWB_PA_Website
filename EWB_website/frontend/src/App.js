import './App.css';
import img from './images/maxresdefault.png';
function App() {
  // Write js functions here
  

  // The return statement will mainly comprise of HTML
  return (
    <div className="App">
      <img src="https://lh3.googleusercontent.com/proxy/7s2oXXa75NhmRF3gFhesWpmuk1f1maTp2bLwMGUlC093WOC2o12-II_BAGSbNQjG4tPbc6dAOSISDjORRRrvhNdsnEPyEwTCtG_bVyPX0GMdQniVEytmAWweuHh2EYJZPpFe" alt="canadian flag"/>
      <img src= {img} alt = "partyimages"/>
      <div className="app__body">
        <p className = "text__header">
        </p>
      </div>
    </div>
  );
}

export default App;
