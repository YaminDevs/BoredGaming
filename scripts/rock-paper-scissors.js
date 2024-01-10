const score = document.querySelector('.score')
const btns = document.querySelectorAll('.player')
const result = document.querySelector('.result')
const text = document.querySelector('.text')
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
    if(computerScore >= 3 || playerScore >= 3){
        text.innerHTML = `someone reached 3 points`
    }
};


const game = (choice) => {
    const options = ['rock', 'paper', 'scissors']

    let computerChoice = () => {
        return options[Math.floor(Math.random() * options.length)]
    };

    computerChoice = computerChoice()
    
    if(choice === computerChoice ){
        text.innerHTML = `Player chose ${choice} and COM also chose ${computerChoice} it\'s a tie the score is ${playerScore} to ${computerScore}`
    }
    else if(
    choice === 'rock' && computerChoice === 'scissors' ||
    choice === 'paper' && computerChoice === 'rock' ||
    choice === 'scissors' && computerChoice === 'paper'){
        playerScore++
        text.innerHTML = `Player chose ${choice} and COM chose ${computerChoice} you win the score is ${playerScore} to ${computerScore}`
    }
    else{
        computerScore++
        text.innerHTML = `Player chose ${choice} and COM chose ${computerChoice} you lose the score is ${playerScore} to ${computerScore}`
    }
    updateScore();

}



