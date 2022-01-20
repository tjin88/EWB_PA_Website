import './ResultsPage.css';

function ResultsPage() {
    // Write js functions here
    var ans = localStorage.getItem('Ans');
    var toans = ans.substring(1,ans.length-1);
    var Answers = toans.split(',');

    var Questions = ["Canada should invest in greater pipeline infrastructure",
    "It is important that the government subsidizes the development and implementation of environmentally friendly technology",
    "The government needs to take stronger action (carbon taxes, etc) to curb emissions that contribute to climate change",
    "Canada should subsidize child care for children until they turn 18.",
    "The government should fully subsidize the cost of post-secondary education for Canadian citizens.",
    "The government should intervene in the housing market and regulate costs so it is more affordable.",
    "Minimum wage should be increased in accordance with living costs and inflation.",
    "The Federal government should move forward in implementing a nationalized universal pharmacare program to cover the cost of prescription drugs for all Canadians",
    "The Canadian government should not allow essential services/infrastructure to be privatized (roads, utilities, Wi-Fi, public transportation, etc).",
    "Canada should increase tariffs on foreign goods to protect their own domestic industries.",
    "The government should increase taxes on ultra-wealthy companies and individuals, and lower taxes on the poor.",
    "Canada should escalate their actions against North Korea and Iran to prevent them from developing nuclear weapons.",
    "Canada should ban TikTok and Huawei to prevent them from selling Canadians’ data to China.",
    "Canada should reduce the scope of policing and involve other services (ie. mental health centres) in non-violent situations.",
    "Canada should increase their funding of the United Nations to help promote peace and democracy.",
    "Canada should take a harsher stance against China, especially regards to their human rights violations.",
    "Canada should stop all trade with authoritarian countries or countries that have a poor human rights record.",
    "Canada needs encourage more immigration and lower the barriers for new immigrants looking to move to Canada",
    "Canada needs to invest more money into indigenous communities/reserves",
    "Canada should allow Indigenous peoples to have their own system of government.",
    "Canada should be doing more to distribute COVID-19 vaccinations to poorer nations",
    "Canada’s Covid policies have gone too far, restricting Canadians personal freedoms",]

    //Question Answers to Corresponding Q
    let liberal=0;
    let conservative=0;
    let ppc=0;
    let green=0;
    let ndp=0;
    let bloc=0;
    let unsure=0;
    
    let liberalAns = [];
    let conservativeAns = [];
    let ppcAns = [];
    let greenAns = [];
    let ndpAns = [];
    let blocAns = [];
    let unsureAns = [];


    //1
    if(Answers[1]==="1"){ppcAns[ppc] = Questions[0]; ppc++; }
    if(Answers[1]==="2"){conservativeAns[conservative] = Questions[0]; conservative++;}
    if(Answers[1]==="3"){liberalAns[liberal] = Questions[0]; liberal++;}
    if(Answers[1]==="4"){ndpAns[ndp] = Questions[0]; ndp++; blocAns[bloc] = Questions[0]; bloc++;}
    if(Answers[1]==="5"){greenAns[green] = Questions[0]; green++;}
    //2
    if(Answers[2]==="1"){greenAns[green] = Questions[1]; green++;}
    if(Answers[2]==="2"){ndpAns[ndp] = Questions[1]; ndp++;  blocAns[bloc] = Questions[1]; bloc++;}
    if(Answers[2]==="3"){liberalAns[liberal] = Questions[1]; liberal++;}
    if(Answers[2]==="4"){ppcAns[ppc] = Questions[1]; ppc++;}
    if(Answers[2]==="5"){conservativeAns[conservative] = Questions[1]; conservative++;}
    //3
    if(Answers[3]==="1"){greenAns[green] = Questions[2]; green++; ndpAns[ndp] = Questions[2]; ndp++;}
    if(Answers[3]==="2"){blocAns[bloc] = Questions[2]; bloc++; liberalAns[liberal] = Questions[2]; liberal++;}
    if(Answers[3]==="3"){unsureAns[unsure] = Questions[2]; unsure++;}
    if(Answers[3]==="4"){conservativeAns[conservative] = Questions[2]; conservative++;}
    if(Answers[3]==="5"){ppcAns[ppc] = Questions[2]; ppc++;}
    //4
    if(Answers[4]==="1"){greenAns[green] = Questions[3]; green++;}
    if(Answers[4]==="2"){ndpAns[ndp] = Questions[3]; ndp++;  blocAns[bloc] = Questions[3]; bloc++;}
    if(Answers[4]==="3"){liberalAns[liberal] = Questions[3]; liberal++;}
    if(Answers[4]==="4"){conservativeAns[conservative] = Questions[3]; conservative++;}
    if(Answers[4]==="5"){ppcAns[ppc] = Questions[3]; ppc++;}
    //5
    if(Answers[5]==="1"){greenAns[green] = Questions[4]; green++;}
    if(Answers[5]==="2"){ndpAns[ndp] = Questions[4]; ndp++;}
    if(Answers[5]==="3"){liberalAns[liberal] = Questions[4]; liberal++;  blocAns[bloc] = Questions[4]; bloc++;}
    if(Answers[5]==="4"){conservativeAns[conservative] = Questions[4]; conservative++;}
    if(Answers[5]==="5"){ppcAns[ppc] = Questions[4]; ppc++;}
    //6
    if(Answers[6]==="1"){greenAns[green] = Questions[5]; green++;}
    if(Answers[6]==="2"){ndpAns[ndp] = Questions[5]; ndp++;  blocAns[bloc] = Questions[5]; bloc++; liberalAns[liberal] = Questions[5]; liberal++;}
    if(Answers[6]==="3"){unsureAns[unsure] = Questions[5]; unsure++;}
    if(Answers[6]==="4"){conservativeAns[conservative] = Questions[5]; conservative++;}
    if(Answers[6]==="5"){ppcAns[ppc] = Questions[5]; ppc++;}
    //7
    if(Answers[7]==="1"){greenAns[green] = Questions[6]; green++;}
    if(Answers[7]==="2"){ndpAns[ndp] = Questions[6]; ndp++;}
    if(Answers[7]==="3"){ blocAns[bloc] = Questions[6]; bloc++;}
    if(Answers[7]==="4"){liberalAns[liberal] = Questions[6]; liberal++;}
    if(Answers[7]==="5"){conservativeAns[conservative] = Questions[6]; conservative++;ppcAns[ppc] = Questions[6]; ppc++;}
    //8
    if(Answers[8]==="1"){ndpAns[ndp] = Questions[7]; ndp++; greenAns[green] = Questions[7]; green++;}
    if(Answers[8]==="2"){liberalAns[liberal] = Questions[7]; liberal++;  blocAns[bloc] = Questions[7]; bloc++;}
    if(Answers[8]==="3"){unsureAns[unsure] = Questions[7]; unsure++;}
    if(Answers[8]==="4"){conservativeAns[conservative] = Questions[7]; conservative++;}
    if(Answers[8]==="5"){ppcAns[ppc] = Questions[7]; ppc++;}
    //9
    if(Answers[9]==="1"){ndpAns[ndp] = Questions[8]; ndp++;}
    if(Answers[9]==="2"){liberalAns[liberal] = Questions[8]; liberal++;}
    if(Answers[9]==="3"){greenAns[green] = Questions[8]; green++;}
    if(Answers[9]==="4"){conservativeAns[conservative] = Questions[8]; conservative++;}
    if(Answers[9]==="5"){ppcAns[ppc] = Questions[8]; ppc++;}
    //10
    if(Answers[10]==="1"){ndpAns[ndp] = Questions[9]; ndp++;conservativeAns[conservative] = Questions[9]; conservative++;}
    if(Answers[10]==="2"){ blocAns[bloc] = Questions[9]; bloc++;}
    if(Answers[10]==="3"){greenAns[green] = Questions[9]; green++;}
    if(Answers[10]==="4"){ppcAns[ppc] = Questions[9]; ppc++;}
    if(Answers[10]==="5"){liberalAns[liberal] = Questions[9]; liberal++;}
    //11
    if(Answers[11]==="1"){ndpAns[ndp] = Questions[10]; ndp++;}
    if(Answers[11]==="2"){ blocAns[bloc] = Questions[10]; bloc++; greenAns[green] = Questions[10]; green++;}
    if(Answers[11]==="3"){liberalAns[liberal] = Questions[10]; liberal++;}
    if(Answers[11]==="4"){conservativeAns[conservative] = Questions[10]; conservative++;}
    if(Answers[11]==="5"){ppcAns[ppc] = Questions[10]; ppc++;}
    //12
    if(Answers[12]==="1"){conservativeAns[conservative] = Questions[11]; conservative++;}
    if(Answers[12]==="2"){ndpAns[ndp] = Questions[11]; ndp++;}
    if(Answers[12]==="3"){greenAns[green] = Questions[11]; green++;  blocAns[bloc] = Questions[11]; bloc++;}
    if(Answers[12]==="4"){liberalAns[liberal] = Questions[11]; liberal++;}
    if(Answers[12]==="5"){ppcAns[ppc] = Questions[11]; ppc++;}
    //13
    if(Answers[13]==="1"){ppcAns[ppc] = Questions[12]; ppc++;}
    if(Answers[13]==="2"){conservativeAns[conservative] = Questions[12]; conservative++; ndpAns[ndp] = Questions[12]; ndp++;}
    if(Answers[13]==="3"){greenAns[green] = Questions[12]; green++;}
    if(Answers[13]==="4"){ blocAns[bloc] = Questions[12]; bloc++;}
    if(Answers[13]==="5"){liberalAns[liberal] = Questions[12]; liberal++;}
    //14
    if(Answers[14]==="1"){greenAns[green] = Questions[13]; green++;ndpAns[ndp] = Questions[13]; ndp++;}
    if(Answers[14]==="2"){liberalAns[liberal] = Questions[13]; liberal++;}
    if(Answers[14]==="3"){ blocAns[bloc] = Questions[13]; bloc++;}
    if(Answers[14]==="4"){conservativeAns[conservative] = Questions[13]; conservative++;}
    if(Answers[14]==="5"){ppcAns[ppc] = Questions[13]; ppc++;}
    //15
    if(Answers[15]==="1"){ndpAns[ndp] = Questions[14]; ndp++;}
    if(Answers[15]==="2"){ blocAns[bloc] = Questions[14]; bloc++;}
    if(Answers[15]==="3"){greenAns[green] = Questions[14]; green++;}
    if(Answers[15]==="4"){conservativeAns[conservative] = Questions[14]; conservative++; ppcAns[ppc] = Questions[14]; ppc++;}
    if(Answers[15]==="5"){liberalAns[liberal] = Questions[14]; liberal++;}
    //16
    if(Answers[16]==="1"){ppcAns[ppc] = Questions[15]; ppc++;}
    if(Answers[16]==="2"){ blocAns[bloc] = Questions[15]; bloc++; ndpAns[ndp] = Questions[15]; ndp++;}
    if(Answers[16]==="3"){greenAns[green] = Questions[15]; green++;}
    if(Answers[16]==="4"){conservativeAns[conservative] = Questions[15]; conservative++;}
    if(Answers[16]==="5"){liberalAns[liberal] = Questions[15]; liberal++;}
    //17
    if(Answers[17]==="1"){ppcAns[ppc] = Questions[16]; ppc++;}
    if(Answers[17]==="2"){conservativeAns[conservative] = Questions[16]; conservative++;}
    if(Answers[17]==="3"){liberalAns[liberal] = Questions[16]; liberal++;}
    if(Answers[17]==="4"){ndpAns[ndp] = Questions[16]; ndp++;  blocAns[bloc] = Questions[16]; bloc++;}
    if(Answers[17]==="5"){greenAns[green] = Questions[16]; green++;}
    //18
    if(Answers[18]==="1"){ndpAns[ndp] = Questions[17]; ndp++; greenAns[green] = Questions[17]; green++;}
    if(Answers[18]==="2"){liberalAns[liberal] = Questions[17]; liberal++;}
    if(Answers[18]==="3"){unsureAns[unsure] = Questions[17]; unsure++;}
    if(Answers[18]==="4"){ blocAns[bloc] = Questions[17]; bloc++; conservativeAns[conservative] = Questions[17]; conservative++;}
    if(Answers[18]==="5"){ppcAns[ppc] = Questions[17]; ppc++;}
    //19
    if(Answers[19]==="1"){unsureAns[unsure] = Questions[18]; unsure++;}
    if(Answers[19]==="2"){ndpAns[ndp] = Questions[18]; ndp++;greenAns[green] = Questions[18]; green++;}
    if(Answers[19]==="3"){ blocAns[bloc] = Questions[18]; bloc++;}
    if(Answers[19]==="4"){liberalAns[liberal] = Questions[18]; liberal++; conservativeAns[conservative] = Questions[18]; conservative++;}
    if(Answers[19]==="5"){ppcAns[ppc] = Questions[18]; ppc++;}
    //20
    if(Answers[20]==="1"){ppcAns[ppc] = Questions[19]; ppc++; greenAns[green] = Questions[19]; green++}
    if(Answers[20]==="2"){ndpAns[ndp] = Questions[19]; ndp++;  blocAns[bloc] = Questions[19]; bloc++}
    if(Answers[20]==="3"){unsureAns[unsure] = Questions[19]; unsure++;}
    if(Answers[20]==="4"){conservativeAns[conservative] = Questions[19]; conservative++;}
    if(Answers[20]==="5"){liberalAns[liberal] = Questions[19]; liberal++;}
    //21
    if(Answers[21]==="1"){ndpAns[ndp] = Questions[20]; ndp++;}
    if(Answers[21]==="2"){liberalAns[liberal] = Questions[20]; liberal++;}
    if(Answers[21]==="3"){ blocAns[bloc] = Questions[20]; bloc++; greenAns[green] = Questions[20]; green++}
    if(Answers[21]==="4"){conservativeAns[conservative] = Questions[20]; conservative++;}
    if(Answers[21]==="5"){ppcAns[ppc] = Questions[20]; ppc++;}
    //22
    if(Answers[22]==="1"){ppcAns[ppc] = Questions[21]; ppc++;}
    if(Answers[22]==="2"){conservativeAns[conservative] = Questions[21]; conservative++;}
    if(Answers[22]==="3"){greenAns[green] = Questions[21]; green++;}
    if(Answers[22]==="4"){liberalAns[liberal] = Questions[21]; liberal++; ndpAns[ndp] = Questions[21]; ndp++}
    if(Answers[22]==="5"){ndpAns[ndp] = Questions[21]; ndp++;}

    // The return statement will mainly comprise of HTML
    return (
      <div className="ResultsPage">
        <div className="ResultsPage__body">
          <h1 className="Header"> RESULTS </h1>
          <h3 className="subTitle"> Hover over the bar to see which questions led to these results</h3>
          <div className='dropdown'>
            <p className="rectangleBarGreen">{green}</p>
            <div className="dropdown-contentgreen">
              <p>{greenAns}</p>
            <div class="arrow-down green"></div>
            </div>
          </div>
          <div className='dropdown'>
            <p className="rectangleBarBloc">{bloc}</p>
            <div className="dropdown-contentbloc">
            <div class="arrow-down bloc"></div>

            <p>{blocAns}</p>
            </div>
          </div>
          <div className='dropdown'>
            <p className="rectangleBarLiberal"> {liberal} </p>
            <div className="dropdown-contentliberal">
            <div class="arrow-down liberal"></div>

            <p>{liberalAns}</p>
            </div>
          </div>
          <div className='dropdown'>
            <p className="rectangleBarConservative"> {conservative} </p>
            <div className="dropdown-contentconservative">
            <div class="arrow-down conservative"></div>
            <p>{conservativeAns}</p>
            </div>
          </div>
          <div className='dropdown'>
            <p className="rectangleBarPPC"> {ppc} </p>
            <div className="dropdown-contentppc">
            <div class="arrow-down ppc"></div>

            <p>{ppcAns}</p>
            </div>
          </div>
          <div className='dropdown'>
            <p className="rectangleBarNDP"> {ndp} </p>
            <div className="dropdown-contentndp">
            <div class="arrow-down ndp"></div>
            <p>{ndpAns}</p>
            </div>
            </div>
        
          {/* <p> liberal{liberal}</p>  
          <p> cons{conservative}</p>  
          <p> ndp{ndp}</p>  
          <p> bloc{bloc}</p>  
          <p> green{green}</p>  
          <p> ppc{ppc}</p>
          <p> unsure{unsure}</p> */}
        </div>
      </div>
    );
  }

export default ResultsPage;
