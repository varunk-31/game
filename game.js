let userScore = 0;
let compScore = 0;
let noOfTurns = 0;

let choices = document.querySelectorAll(".choice");

// to count no of turns
const turns = (noOfTurns)=>{
    document.querySelector(".noOfTurns").innerText = `Number of turns : ${noOfTurns}`
}

// to generate random guess by computer
const gencompchoice = () =>{

    let options = ["stone" , "paper" , "scissors"];

    const randomIdx = Math.floor(Math.random()* 3) ;
    
    document.querySelector("#computerChoosed").innerText = `Computer choosed: ${options[randomIdx]}`;

    return options[randomIdx]

}


// for draw
const drawMatch =  ()=>{
    console.log("Its a draw");
    document.querySelector("#msg").innerText = "its a draw , try again";
}

// to interact with winner
const Winner = (userWin)=>{
if(userWin){
console.log("you win");
userScore++;
document.querySelector("#msg").innerText = "You Win";
}
else{
    console.log("computer wins"); 
    compScore++;
    document.querySelector("#msg").innerText = "You Lose";
}
document.querySelector("#user-score").innerText = userScore;
document.querySelector("#comp-score").innerText = compScore;
}


// main
const playGame = (userChoice)=>{
    console.log("you picked: " , userChoice);
    // get comp value
const compchoice = gencompchoice();
console.log("computer picked: " , compchoice);

if(userChoice===compchoice){
    //draw 
drawMatch();
}
else{
    let userWin = true;
    if(userChoice === "stone"){
        // computer have paper , scissors
       userWin =  compchoice ===  "paper" ? false:true;
    }

    else if(userChoice==="paper"){
        // stone , scissors
        userWin =  compchoice ===  "scissors" ? false:true;
    }
    else{
        // rock , paper
        userWin =  compchoice ===  "stone" ? false:true;
    }
    Winner(userWin);
}

}



// for jis choice pe click kiya hai uski value milengi for user
choices.forEach((choice)=>{

    choice.addEventListener("click" , ()=>{

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        noOfTurns++;
        turns(noOfTurns)
        
       
        
    })
})


