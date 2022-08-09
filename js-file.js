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

        function playRound(playerSelection, computerSelection)
        {
            if (playerSelection == "rock" && computerSelection == "rock")
            {
                console.log("Rock and rock! Draw!");
                return -1;
            }
            if (playerSelection == "rock" && computerSelection == "paper")
            {
                console.log("Paper beats rock! Computer wins!");
                return 1;
            }
            if (playerSelection == "rock" && computerSelection == "scissors")
            {
                console.log("Rock beats scissors! Player wins!");
                return 0;
            }

            if (playerSelection == "paper" && computerSelection == "rock")
            {
                console.log("Paper beats rock! Player wins!");
                return 0;
            }
            if (playerSelection == "paper" && computerSelection == "paper")
            {
                console.log("Paper and paper! Draw!");
                return -1;
            }
            if (playerSelection == "paper" && computerSelection == "scissors")
            {
                console.log("Scissors beats paper! Computer wins!");
                return 1;
            }

            if (playerSelection == "scissors" && computerSelection == "rock")
            {
                console.log("Rock beats scissors! Computer wins!");
                return 1;
            }
            if (playerSelection == "scissors" && computerSelection == "paper")
            {
                console.log("Scissors beats paper! Player wins!");
                return 0;
            }
            if (playerSelection == "scissors" && computerSelection == "scissors")
            {
                console.log("Scissors and scissors! Draw!");
                return -1;
            }
            return;
        }

        function game()
        {
            let playerScore = 0;
            let computerScore = 0;

                //runs until a player reaches victory threshold

                //let playerSelection = prompt("What is your choice: (Rock) (Paper) (Scissors)");
                playerSelection = playerSelection.toLowerCase();
                let computerSelection = getComputerChoice();
                if (playRound(playerSelection, computerSelection) == 0)
                //player wins
                {
                    playerScore++;
                }
                else if (playRound(playerSelection, computerSelection) == 1)
                //computer wins
                {
                    computerScore++;
                }
            console.log("Player has " + playerScore + " points and Computer has " + computerScore + " points.")

            if (playerScore > computerScore)
            {
                console.log("Player wins! Congratulations!");
            }

            else if (computerScore > playerScore)
            {
                console.log("Computer wins! Whoopsies!");
            }
            else{
                console.log("Tie! Try again!");
            }
        }
        //body
        game();


 


    