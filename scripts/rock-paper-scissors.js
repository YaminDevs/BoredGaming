const userRock = document.querySelector('.user-rock');
const userPaper = document.querySelector('.user-paper')
const userScissor = document.querySelector('.user-scissor')

const options = ['rock', 'paper', 'scissors']

const getComputerChoice = () => {
    return options[Math.floor(Math.random() * options.length)]
};

