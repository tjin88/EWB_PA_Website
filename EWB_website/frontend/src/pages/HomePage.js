import React from 'react';
import './HomePage.css';
import canadianFlag from '../images/canada.png';
import parties from '../images/parties.png';
// import parties2 from '../images/parties2.png';

function HomePage() {

  // The return statement will mainly comprise of HTML
  return (
    <div className="HomePage">
      <div className="HomePage__body">
      <img className = "canadianFlagRight" src = {canadianFlag} alt = "Canadian Flag"/>

      <img className = "parties" src = {parties} alt = "Canadian Parties"/>
      {/* <div class="rectangle"></div>
      <img className = "parties2" src = {parties2} alt = "Canadian Parties"/> */}

      <img className = "canadianFlagLeft" src = {canadianFlag} alt = "Canadian Flag"/>

      <p className = "text__header">EWB Canadian Party Alignment Quiz</p>

      <button className = "startButton"> 
        <a href="/QuestionPage">
            Click here to Start 
        </a>
      </button>

      {/* <form action="./QuestionPage"> */}
      {/* <form action="./test">
        <button className = "startButton"> 
            Click here to Start 
        </button>
      </form> */}
      
      </div>
    </div>
  );
}

export default HomePage;
