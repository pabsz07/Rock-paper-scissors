const arrSelection = ['rock', 'paper','scissors'];
let userScore=0;
let compScore=0;

function computerPlay(){
    let compSelection= Math.floor(Math.random()*3);
    
    if(compSelection===0)
    return "rock";
    else if (compSelection===1)
    return 'paper';
    else if (compSelection===2)
    return "scissors";
}

function playRound(playerSelection,computerSelection){
     if(playerSelection!==computerSelection)
     {
        if((playerSelection==='rock'&&computerSelection==='paper') || (playerSelection==='paper'&&computerSelection==='scissors') || (playerSelection==='scissors'&&computerSelection==='rock'))
        {
            compScore+=1;
            console.log(`You lose! ${computerSelection.replace(computerSelection[0],computerSelection[0].toUpperCase())} beats ${playerSelection}`);
        }
        else if((playerSelection==='scissors'&&computerSelection==='paper') || (playerSelection==='paper'&&computerSelection==='rock') || (playerSelection==='rock'&&computerSelection==='scissors'))
        {
            userScore+=1;
            console.log(`You win! ${playerSelection.replace(playerSelection[0],playerSelection[0].toUpperCase())} beats ${computerSelection}`);
        }
        
     }
     else
        console.log(`No one wins. You both have ${computerSelection}`);
}

function game(){
    let computerSelection = null;
    let playerSelection = null;
    let check=0;
    compScore=0;
    userScore=0;
    
    if(confirm("Start the game?"))
    {
        for(let i=0;i<5;i++)
        {
            computerSelection=computerPlay();
            playerSelection = prompt("Enter your bet:", "Rock,paper or scissors");
            if(playerSelection!==null)
            {
                playerSelection=playerSelection.toLowerCase();
                check = arrSelection.indexOf(playerSelection);
            }
            else break;
            while(check===-1)
            {
                alert("Wrong input please enter either rock, paper or scissors!");
                playerSelection = prompt("Enter your bet:", "Rock,paper or scissors");
                if(playerSelection!==null)
                {
                    playerSelection=playerSelection.toLowerCase();
                    check=arrSelection.indexOf(playerSelection);
                }
                else
                {
                    check=3;
                    break;
                }
            }

            if(check===3) break;

            playRound(playerSelection,computerSelection);
            console.log(`Round ${(i+1)} - Your score: ${userScore} | Opponent Score: ${compScore}`);

        }
        compScore<userScore?alert('Congratulations! You win'):compScore===userScore?alert('No one wins'):alert('Uh oh! You lose');
    }
    else 
        alert("You exited the game!");
}
