
let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#usc");
const compScorePara=document.querySelector("#csc");
const msgcontainer=document.querySelector("#msg");


const genCompChoice=()=>{
const options=["rock","paper","scissors"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};


const drawGame=()=>{
  msgcontainer.innerText="Game was Draw. Play again.";
  msgcontainer.style.backgroundColor="#081b31";
};


const showWinner=(userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msgcontainer.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
    msgcontainer.style.backgroundColor="green";
  }else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msgcontainer.style.backgroundColor="red";
  }
};


const playGame=(userChoice)=>{
  const compChoice=genCompChoice();
  if(userChoice===compChoice){
    drawGame();
  }else{
    let userWin=true;
    if(userChoice==="rock"){
      userWin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
      userWin=compChoice==="scissors"?false:true;
    }else{
      userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};


choices.forEach((choice)=>{
  choice.addEventListener("click",()=> {
  const userChoice=choice.getAttribute("id");
  playGame(userChoice);
  });
});





