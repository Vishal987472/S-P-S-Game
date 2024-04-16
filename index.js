let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","Paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {
    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor = "#1665b9";

}
const showWin = (userWin,userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "Paper" ? false : true;
        }else if(userChoice === "Paper") {
            userWin = compChoice === "scissor" ? false : true;
        }else if(userChoice === "scissor"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWin(userWin, userChoice, compChoice);
    }

};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
})