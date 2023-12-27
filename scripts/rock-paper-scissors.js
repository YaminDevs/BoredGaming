const rock = document.querySelector('.user-rock');
const paper = document.querySelector('.user-paper')
const scissor = document.querySelector('.user-scissor')

const options = ['rock', 'paper', 'scissors']


const game = (choice) => {
    let computerChoice = () => {
        return options[Math.floor(Math.random() * options.length)]
    };

    computerChoice = computerChoice()

    if(choice === computerChoice){
        console.log('it\'s a tie')
    }
    else if(
    choice === 'rock' && computerChoice === 'scissors' ||
    choice === 'paper' && computerChoice === 'rock' ||
    choice === 'scissors' && computerChoice === 'paper'){
        console.log('you win')
    }
    else{
        console.log('you lose')
    }
}

