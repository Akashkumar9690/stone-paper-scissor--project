let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    // rock paper scissors
    const options = ["rock", "paper", "scissors"];
    const randomIndx = Math.floor(Math.random() * 3);
    return options[randomIndx];
}
const drawGame = () => {
    msg.innerText="Game was draw";
    msg.style.backgroundColor = " brown";
};
const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You Win !  your ${userChoice} beats ${compChoice}`; 
        msg.style.backgroundColor = "green";

    }
    else {
        compScore++;
        compScorePara.innerText=compScore;    
        msg.innerText = `You lost !  ${compChoice} beats ${userChoice}`; 
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) => {

    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            //rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });

});