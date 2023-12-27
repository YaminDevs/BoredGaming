const score = document.querySelector('.score')
const btns = document.querySelectorAll('.btn')
let scoreBoard = 0
let playerScore = 0
let computerScore = 0

const resetGame = () => {
    computerScore = 0;
    playerScore = 0;
    updateScore();
}

const updateScore = () => {
    score.innerHTML = `Score: User ${playerScore} to COM ${computerScore}`;
};


const game = (choice) => {
    const options = ['rock', 'paper', 'scissors']

    let computerChoice = () => {
        return options[Math.floor(Math.random() * options.length)]
    };

    computerChoice = computerChoice()

    if(choice === computerChoice){
        console.log(`Player chose ${choice} and COM also chose ${computerChoice} it\'s a tie the score is ${playerScore} to ${computerScore}`)
    }
    else if(
    choice === 'rock' && computerChoice === 'scissors' ||
    choice === 'paper' && computerChoice === 'rock' ||
    choice === 'scissors' && computerChoice === 'paper'){
        playerScore++
        console.log(`Player chose ${choice} and COM chose ${computerChoice} you win the score is ${playerScore} to ${computerScore}`)
    }
    else{
        computerScore++
        console.log(`Player chose ${choice} and COM chose ${computerChoice} you lose the score is ${playerScore} to ${computerScore}`)
    }
    updateScore();

    if (computerScore === 3 || playerScore === 3){
        btns.forEach(btn => {
            btn.addEventListener('click', resetGame);
        });
    }
    if (computerScore === 0 && playerScore === 0){
        btns.forEach(btn => {
            btn.removeEventListener('click', resetGame);
        });
    }
}



