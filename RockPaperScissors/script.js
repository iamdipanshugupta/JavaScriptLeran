let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg")
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");

const genCompGame = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3 );
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game Was Draw , Play Again";
    msg.style.backgroundColuseror = "yellow";
    msg.style.color = "black";
}

const showWinner = (userwin , userChoice , compChoice) => {
    if(userwin){
        userScore++;
        userscore.innerText = userScore;
        msg.innerText = `You Win Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green"
    }
    else{
        compScore++;
        compscore.innerText = compScore;
        msg.innerText = `You Lose ${compChoice} beats you ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}


const playGame = (userChoice) => {
    const compChoice = genCompGame();
    if(userChoice == compChoice){
        drawGame()
    }
    else{
        let userwin = true;
        if(userChoice === "rock"){
            // scissors , paper
            userwin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock , scissors
            userwin = compChoice === "scissors" ? false : true;
        }
        else{
            // rock paper
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin , userChoice , compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click' , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})