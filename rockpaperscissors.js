const arrSelection = ['rock', 'paper','scissors'];
let userScore=0;
let compScore=0;

function computerPlay(){
    let compSelection= Math.floor(Math.random()*3)+1;
    if(compSelection===1)
    return "rock";
    else if (compSelection ===2)
    return 'paper';
    else if (compSelection===3)
    return "scissors";
}

function playRound(playerSelection,computerSelection){
     if(playerSelection!==computerSelection)
     {
        if(playerSelection==='rock')
        {
            if(computerSelection==='paper')
            {
                alert("You lose! Paper beats rock");
                compScore++;
            }
            else if(computerSelection==='scissors')
            {
                alert("You win! Rock beats scissors");
                userScore++;
            }
        }
        else if(playerSelection==='paper')
        {
            if(computerSelection==='rock')
            {
                alert("You win! Paper beats rock");
                userScore++;
            }
            else if(computerSelection==='scissors')
            {
                alert("You lose! Scissors beats paper");
                compScore++;
            }
        }
        else if(playerSelection==='scissors')
        {
            if(computerSelection==='paper')
            {   
                alert("You win! scissors beats paper");
                userScore++;
            }
            else if(computerSelection==='rock')
            {
                alert("You lose! Rock beats scissors");
                compScore++;
            }
        }
     }
     else
     {
         alert(`No one wins. You both have ${computerSelection}`);
     }
}

function game(){
    let computerSelection = null;
    let playerSelection = null;
    let check=0;
    compScore=0;
    userScore=0;

    for(let i=0;i<5;i++)
    {
        computerSelection=computerPlay();
        playerSelection=prompt("Enter your bet:", "Rock,paper or scissors");
        if(playerSelection!==null)
        playerSelection=playerSelection.toLowerCase();
        else 
        {
            alert("You exited the game!");
            break;
        }

        check=arrSelection.indexOf(playerSelection);
        while(check===-1)
        {
            alert("Wrong input please enter either rock, paper or scissors!");
            playerSelection = prompt("Enter your bet:", "Rock,paper or scissors");
            if(playerSelection!==null)
            playerSelection=playerSelection.toLowerCase();
            else break;
            check=arrSelection.indexOf(playerSelection);
        }
        playRound(playerSelection,computerSelection);
        console.log(`Round ${(i+1)} - Your score: ${userScore} | Opponent Score: ${compScore}`);
    }
    compScore<userScore?alert('Congratulations! You win'):alert ('Uh oh! You lose!');
}
