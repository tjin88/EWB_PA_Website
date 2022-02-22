import React, { useState, useEffect } from 'react';
import './QuestionPage.css';

var Questions = ["Canada should invest in greater pipeline infrastructure",
"It is important that the government subsidizes the development and implementation of environmentally friendly technology",
"The government needs to take stronger action (carbon taxes, etc) to curb emissions that contribute to climate change",
"Canada should subsidize child care for children until they turn 18",
"The government should fully subsidize the cost of post-secondary education for Canadian citizens",
"The government should intervene in the housing market and regulate costs so it is more affordable",
"Minimum wage should be increased in accordance with living costs and inflation",
"The Federal government should move forward in implementing a nationalized universal pharmacare program to cover the cost of prescription drugs for all Canadians",
"The Canadian government should not allow essential services/infrastructure to be privatized (roads, utilities, Wi-Fi, public transportation, etc)",
"Canada should increase tariffs on foreign goods to protect their own domestic industries",
"The government should increase taxes on ultra-wealthy companies and individuals, and lower taxes on the poor",
"Canada should escalate their actions against North Korea and Iran to prevent them from developing nuclear weapons",
"Canada should ban TikTok and Huawei to prevent them from selling Canadians’ data to China",
"Canada should increase their funding of the United Nations to help promote peace and democracy",
"Canada should push harder against the US in regards to trade",
"Canada should take a harsher stance against nations and governments known to violate human rights (enforcing sanctions, ending trade relations, etc.)",
"Canada needs encourage more immigration and lower the barriers for new immigrants looking to move to Canada",
"Canada should reduce the scope of policing and involve other services (ie. mental health centres) in non-violent situations",
"Canada needs to invest more money into indigenous communities/reserves",
"Canada should allow Indigenous peoples to have their own system of government",
// "Canada should stop all trade with authoritarian countries or countries that have a poor human rights record", --> We have since removed this question
"Canada should be doing more to distribute COVID-19 vaccinations to poorer nations",
"Canada’s Covid policies have gone too far, restricting Canadians' personal freedoms",]
var Answers = []


function QuestionPage() {
  // Write js functions here
  const [count, setCount] = useState(-1);
  const [option, setOption] = useState(-1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    Answers[count] = option;
    console.log("Answers: " + Answers + ", count: " + count);

    if (count === (Questions.length - 1)) {
      localStorage.setItem('Ans',Answers);
        window.location.replace("/ResultsPage");
    }

  }, [option, count]);


  // The return statement will mainly comprise of HTML
  return (
    <div className="QuestionPage">
      <div className="QuestionPage__body">
          <h1 className="rectangle">
            <p className = "Questions__number">{((count !== -1) && (count < 22)) ? "Question: " + (count+1) : null}</p>
            <p className="Questions__text">
              {count === -1 
              ? "Click any button to start" 
              : Questions[count]}
            </p>
          </h1>
          <button className = "backButton" onClick = {() => {Answers[count] = null; setCount(count - 1)}}>
            back
          </button>
          <ul className="list">
              <li> 
                <button onClick={() => {setOption(1); setCount(count + 1);}} className="listItem">Option 1: Strongly Agree</button>
              </li>
              <li> 
                <button onClick={() => {setOption(2); setCount(count + 1);}} className="listItem">Option 2: Agree</button>
              </li>
              <li> 
                <button onClick={() => {setOption(3); setCount(count + 1);}} className="listItem">Option 3: Unsure</button>
              </li>
              <li> 
                <button onClick={() => {setOption(4); setCount(count + 1);}} className="listItem">Option 4: Disagree</button>
              </li>
              <li> 
                <button onClick={() => {setOption(5); setCount(count + 1);}} className="listItem">Option 5: Strongly Disagree</button>
              </li>
          </ul>
      </div>
    </div>
  );
}

export default QuestionPage;
