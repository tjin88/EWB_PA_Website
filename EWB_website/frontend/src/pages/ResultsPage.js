import './ResultsPage.css';

function ResultsPage() {
    // Write js functions here
    var ans = localStorage.getItem('Ans');
    var toans = ans.substring(1,ans.length-1);
var Answers = toans.split(',');

    //Question Answers to Corresponding Q
    let liberal=0;
    let conservative=0;
    let ppc=0;
    let green=0;
    let ndp=0;
    let bloc=0;
    let unsure=0;
    //1
    if(Answers[1]==1){ppc++;}
    if(Answers[1]==2){conservative++;}
    if(Answers[1]==3){liberal++;}
    if(Answers[1]==4){ndp++; bloc++;}
    if(Answers[1]==5){green++;}
    //2
    if(Answers[2]==1){green++;}
    if(Answers[2]==2){ndp++; bloc++;}
    if(Answers[2]==3){liberal++;}
    if(Answers[2]==4){ppc++;}
    if(Answers[2]==5){conservative++;}
    //3
    if(Answers[3]==1){green++; ndp++;}
    if(Answers[3]==2){bloc++; liberal++;}
    if(Answers[3]==3){unsure++;}
    if(Answers[3]==4){conservative++;}
    if(Answers[3]==5){ppc++;}
    //4
    if(Answers[4]==1){green++;}
    if(Answers[4]==2){ndp++; bloc++;}
    if(Answers[4]==3){liberal++;}
    if(Answers[4]==4){conservative++;}
    if(Answers[4]==5){ppc++;}
    //5
    if(Answers[5]==1){green++;}
    if(Answers[5]==2){ndp++;}
    if(Answers[5]==3){liberal++; bloc++;}
    if(Answers[5]==4){conservative++;}
    if(Answers[5]==5){ppc++;}
    //6
    if(Answers[6]==1){green++;}
    if(Answers[6]==2){ndp++; bloc++; liberal++;}
    if(Answers[6]==3){unsure++;}
    if(Answers[6]==4){conservative++;}
    if(Answers[6]==5){ppc++;}
    //7
    if(Answers[7]==1){green++;}
    if(Answers[7]==2){ndp++;}
    if(Answers[7]==3){bloc++;}
    if(Answers[7]==4){liberal++;}
    if(Answers[7]==5){conservative++;ppc++;}
    //8
    if(Answers[8]==1){ndp++; green++;}
    if(Answers[8]==2){liberal++; bloc++;}
    if(Answers[8]==3){unsure++;}
    if(Answers[8]==4){conservative++;}
    if(Answers[8]==5){ppc++;}
    //9
    if(Answers[9]==1){ndp++;}
    if(Answers[9]==2){liberal++;}
    if(Answers[9]==3){green++;}
    if(Answers[9]==4){conservative++;}
    if(Answers[9]==5){ppc++;}
    //10
    if(Answers[10]==1){ndp++;conservative++;}
    if(Answers[10]==2){bloc++;}
    if(Answers[10]==3){green++;}
    if(Answers[10]==4){ppc++;}
    if(Answers[10]==5){liberal++;}
    //11
    if(Answers[11]==1){ndp++;}
    if(Answers[11]==2){bloc++; green++;}
    if(Answers[11]==3){liberal++;}
    if(Answers[11]==4){conservative++;}
    if(Answers[11]==5){ppc++;}
    //12
    if(Answers[12]==1){conservative++;}
    if(Answers[12]==2){ndp++;}
    if(Answers[12]==3){green++; bloc++;}
    if(Answers[12]==4){liberal++;}
    if(Answers[12]==5){ppc++;}
    //13
    if(Answers[13]==1){ppc++;}
    if(Answers[13]==2){conservative++;ndp++;}
    if(Answers[13]==3){green++;}
    if(Answers[13]==4){bloc++;}
    if(Answers[13]==5){liberal++;}
    //14
    if(Answers[14]==1){green++;ndp++;}
    if(Answers[14]==2){liberal++;}
    if(Answers[14]==3){bloc++;}
    if(Answers[14]==4){conservative++;}
    if(Answers[14]==5){ppc++;}
    //15
    if(Answers[15]==1){ndp++;}
    if(Answers[15]==2){bloc++;}
    if(Answers[15]==3){green++;}
    if(Answers[15]==4){conservative++; ppc++;}
    if(Answers[15]==5){liberal++;}
    //16
    if(Answers[16]==1){ppc++;}
    if(Answers[16]==2){bloc++; ndp++;}
    if(Answers[16]==3){green++;}
    if(Answers[16]==4){conservative++;}
    if(Answers[16]==5){liberal++;}
    //17
    if(Answers[17]==1){ppc++;}
    if(Answers[17]==2){conservative++;}
    if(Answers[17]==3){liberal++;}
    if(Answers[17]==4){ndp++; bloc++;}
    if(Answers[17]==5){green++;}
    //18
    if(Answers[18]==1){ndp++; green++;}
    if(Answers[18]==2){liberal++;}
    if(Answers[18]==3){unsure++;}
    if(Answers[18]==4){bloc++; conservative++}
    if(Answers[18]==5){ppc++;}
    //19
    if(Answers[19]==1){unsure++;}
    if(Answers[19]==2){ndp++;green++;}
    if(Answers[19]==3){bloc++;}
    if(Answers[19]==4){liberal++; conservative++;}
    if(Answers[19]==5){ppc++;}
    //20
    if(Answers[20]==1){ppc++; green++}
    if(Answers[20]==2){ndp++; bloc++}
    if(Answers[20]==3){unsure++;}
    if(Answers[20]==4){conservative++;}
    if(Answers[20]==5){liberal++;}
    //21
    if(Answers[21]==1){ndp++;}
    if(Answers[21]==2){liberal++;}
    if(Answers[21]==3){bloc++; green++}
    if(Answers[21]==4){conservative++;}
    if(Answers[21]==5){ppc++;}
    //22
    if(Answers[22]==1){ppc++;}
    if(Answers[22]==2){conservative++}
    if(Answers[22]==3){green++;}
    if(Answers[22]==4){liberal++; ndp++}
    if(Answers[22]==5){ndp++;}
    


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
          <p> liberal{liberal}</p>  
          <p> cons{conservative}</p>  
          <p> ndp{ndp}</p>  
          <p> bloc{bloc}</p>  
          <p> green{green}</p>  
          <p> ppc{ppc}</p>
          <p> unsure{unsure}</p>
        </div>
      </div>
    );
  }

export default ResultsPage;
