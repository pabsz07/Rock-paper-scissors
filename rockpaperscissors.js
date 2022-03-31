const arrSelection = ['rock', 'paper', 'scissors'];
let userScore = 0;
let compScore = 0;
let counter = 0;
const rounds = document.getElementById("rounds");
const userImage = document.getElementById("userSelect");
const compImage = document.getElementById("compSelect");
const yourScore = document.getElementById("userScore");
const oppScore = document.getElementById("oppScore");

function computerPlay() {
    let compSelection = Math.floor(Math.random() * 3);

    if (compSelection === 0)
        return "rock";
    else if (compSelection === 1)
        return 'paper';
    else if (compSelection === 2)
        return "scissors";
}

function playRound(e) {

    counter += 1;

    if (counter < 6) {

        let computerSelection = computerPlay();
        let playerSelection = e.currentTarget.id;
        const user = document.querySelector('.user');
        const opponent = document.querySelector('.opponent');

        //Remove elements every click;
        userImage.setAttribute('src', "");
        compImage.setAttribute('src', "");

        userImage.setAttribute('src', `./images/${playerSelection}.png`);
        user.insertAdjacentElement('afterbegin', userImage);

        compImage.setAttribute('src', `./images/${computerSelection}.png`);
        opponent.insertAdjacentElement('afterbegin', compImage);



        if (playerSelection !== computerSelection) {
            if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
                compScore += 1;
                rounds.textContent = `Round ${counter}: You lose!`;
            }
            else if ((playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissors')) {
                userScore += 1;
                rounds.textContent = `Round ${counter}: You win!`;
            }

        }
        else
            rounds.textContent = `Round ${counter}: Uh oh! Draw`;

        yourScore.textContent = `Your Score : ${userScore}`;
        oppScore.textContent = `Opponent Score: ${compScore}`;

        if (counter === 5) {

            setTimeout(function () {
                compScore < userScore ? alert('Congratulations, You win this game!') : compScore === userScore ? alert('Game over! No one wins this game') : alert('Game over! You lose!');
            }, 200);

        }

    }

}

function playAgain(e) {
    counter = 0;
    compScore = 0;
    userScore = 0;
    rounds.textContent = "";
    userImage.setAttribute('src', "");
    compImage.setAttribute('src', "");
    yourScore.textContent = `Your Score : ${userScore}`;
    oppScore.textContent = `Opponent Score: ${compScore}`;
}

const imageSelection = document.querySelectorAll('.buttonHolder>img');
imageSelection.forEach(selected => selected.addEventListener('click', playRound));

const retry = document.querySelector('#retry');
retry.addEventListener('click', playAgain);