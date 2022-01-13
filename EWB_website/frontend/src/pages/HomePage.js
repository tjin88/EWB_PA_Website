import React from 'react';
import './HomePage.css';
import canadianFlag from '../images/canada.png';
import parties from '../images/parties.png';
// import parties2 from '../images/parties2.png';

function HomePage() {
  const url = "https://www.google.com/search?gs_ssp=eJzj4tFP1zcsNM2qMKkwSTZg9BLMSK1UKMlILUpVSEnNycxJzAAArRcK1Q&q=hey+there+delilah&rlz=1C5CHFA_enCA709CA710&oq=hey+&aqs=chrome.1.69i57j46i433i512l3j0i512j46i175i199i512j46i433i512j0i433i512j0i512j0i271.2885j0j7&sourceid=chrome&ie=UTF-8";

  // The return statement will mainly comprise of HTML
  return (
    <div className="HomePage">
      <div className="HomePage__body">
      <img className = "canadianFlagRight" src = {canadianFlag} alt = "Canadian Flag"/>
      
      <a id="hdimg" href={url} target="-blank">
            {/* <img id="image_of_the_day" src="${innerData.url}" alt="image-by-nasa"/> */}
            <img className = "parties" src = {parties} alt = "Canadian Parties"/>
      </a>
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
