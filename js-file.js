//code
let playerScore = 0;
let computerScore = 0;
let isGameOver = false;

//interface
const playerScoreText = document.getElementById('scoreP');
const compScoreText = document.getElementById('scoreC');

const message = document.getElementById('footer');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors')

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

function checkForWinner()
{
    if (playerScore >= 5)
    {
        message.textContent = "Player wins! Congratulations!";
        gameOver();
    }
    else if (computerScore >= 5)
    {
        message.textContent ="Computer wins! Whoopsies!";
        gameOver();
    }
}

function gameOver()
{
    rockButton.textContent = "RESTART";
    paperButton.textContent = "RESTART";
    scissorsButton.textContent = "RESTART";
    isGameOver = true;
}
        
function getComputerChoice() 
    //keeps making random nums until between 1 and 3
{
    let choice = 0;
    while (choice > 3 || choice < 1)
    {
        choice = Math.floor(Math.random() * 10);
    }    
    switch(choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(playerSelection)
{
    if (isGameOver == true)
    {
        playerScore = 0;
        computerScore = 0
        compScoreText.textContent = computerScore;
        playerScoreText.textContent = playerScore;
        rockButton.textContent = "🪨";
        paperButton.textContent = "📄";
        scissorsButton.textContent = "✂️";
        message.textContent = "Here we go again!"
        isGameOver = false;
        return;
    }
    let computerSelection = getComputerChoice();
    if (playerSelection == "rock" && computerSelection == "rock")
    {
        message.textContent = "Rock and rock! Draw!";
    }
    if (playerSelection == "rock" && computerSelection == "paper")
    {
        computerScore++;
        message.textContent = "Paper beats rock! Computer wins!";
        compScoreText.textContent = computerScore;
        checkForWinner();
    }
    if (playerSelection == "rock" && computerSelection == "scissors")
    {
        playerScore++;
        message.textContent = "Rock beats scissors! Player wins!";
        playerScoreText.textContent = playerScore;
        checkForWinner();
    }

    if (playerSelection == "paper" && computerSelection == "rock")
    {
        playerScore++;
        message.textContent = "Paper beats rock! Player wins!";
        playerScoreText.textContent = playerScore;
        checkForWinner();
    }
    if (playerSelection == "paper" && computerSelection == "paper")
    {
        message.textContent = "Paper and paper! Draw!";
    }
    if (playerSelection == "paper" && computerSelection == "scissors")
    {
        computerScore++;
        message.textContent = "Scissors beats paper! Computer wins!";
        compScoreText.textContent = computerScore;
        checkForWinner();
    }

    if (playerSelection == "scissors" && computerSelection == "rock")
    {
        computerScore++;
        message.textContent = "Rock beats scissors! Computer wins!";
        compScoreText.textContent = computerScore;
        checkForWinner();
    }
    if (playerSelection == "scissors" && computerSelection == "paper")
    {
        playerScore++;
        message.textContent = "Scissors beats paper! Player wins!";
        playerScoreText.textContent = playerScore;
        checkForWinner();
    }
    if (playerSelection == "scissors" && computerSelection == "scissors")
    {
        message.textContent = "Scissors and scissors! Draw!";
    }
    return;
}