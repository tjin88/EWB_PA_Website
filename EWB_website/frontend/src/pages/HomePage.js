import React from 'react';
import './HomePage.css';
import canadianFlag from '../images/canada.png';
// import parties from '../images/parties.png';
import PPC from '../images/ppc.png';
import NDP from '../images/NDP.png';
import LIB from '../images/lib.png';
import GREEN from '../images/green.png';
import CONS from '../images/Cons.png';
import BLOC from '../images/bloc.png';


function HomePage() {
  // The return statement will mainly comprise of HTML
  return (
    <div className="HomePage">
      <div className="HomePage__body">
        <section className = "pictures">
          <section className = "leftSection">
            <a href = "https://www.canada.ca/home.html" target="-blank">
                <img className = "canadianFlag" src = {canadianFlag} alt = "Canadian Flag"/>
            </a>
          </section>

          <section className = "middleSection">
            <section className = "topSection">
              <a href="https://www.greenparty.ca/en" target="-blank">
                <img className = "GREEN" src = {GREEN} alt = "Green Party"/>
              </a>
              <a href="https://www.blocquebecois.org/" target="-blank">
                  <img className = "BLOC" src = {BLOC} alt = "Bloc Quebecouis"/>
              </a>
              <a href="https://www.peoplespartyofcanada.ca/" target="-blank">
                  <img className = "PPC" src = {PPC} alt = "Peoples Party"/>
              </a>
            </section>
            <section className = "bottomSection">
              <a href="https://www.ndp.ca/" target="-blank">
                    <img className = "NDP" src = {NDP} alt = "NDP Party"/>
              </a>
              <a href="https://liberal.ca/" target="-blank">
                  <img className = "LIB" src = {LIB} alt = "Liberal Party"/>
              </a>
              <a href="https://www.conservative.ca/" target="-blank">
                  <img className = "CONS" src = {CONS} alt = "Conservative Party"/>
              </a>
            </section>
          </section>

          <section className = "rightSection">
            <a href = "https://www.canada.ca/home.html" target="-blank">
              <img className = "canadianFlag" src = {canadianFlag} alt = "Canadian Flag"/>
            </a>
          </section>
        </section>
      
      

      <p className = "text__header">EWB Canadian Party Alignment Quiz</p>
      <a href="/QuestionPage">
      <button className = "startButton"> 
            Click here to Start 
      </button>
      </a>
      </div>
    </div>
  );
}

export default HomePage;
