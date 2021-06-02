const game = () => {
    let pScore = 0;
    let cScore =0;

    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener("click", () => {
            introScreen.classList.add("fadeout");
            match.classList.add("fadein");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = "";
            });
        });

        //computer options
        const computerOptions = [ 'rock' , 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(() => {
                //compare hands call
                compareHand(this.textContent, computerChoice);


                //update image
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                },2000 );

                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
                });
        });
     };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

   const compareHand = (playerChoice, computerChoice) => {
       const winner = document.querySelector(".winner");
       if(playerChoice === computerChoice){
           winner.textContent= "It is a tie";
            return;
       }
       //check for rock
       if(playerChoice === 'rock')
       {
           if(computerChoice === 'scissors'){
               winner.textContent = 'Player Wins';
               pScore++;
               updateScore();
               return;

           } else{
               winner.textContent = 'Computer Wins';
               cScore++;
               updateScore();
               return;
           }
       }
       //check for paper
       if(playerChoice === 'paper')
       {
           if(computerChoice === 'scissors'){
               winner.textContent = 'Computer Wins';
               cScore++;
               updateScore();
               return;

           } else{
               winner.textContent = 'Player Wins';
               pScore++;
               updateScore();
               return;
           }
       }
        //for scissors
       if(playerChoice === 'scissors')
       {
           if(computerChoice === 'rock'){
               winner.textContent = 'Computer Wins';
               cScore++;
               updateScore();
               return;

           } else{
               winner.textContent = 'Player Wins';
               pScore++;
               updateScore();
               return;
           }
       }

   }



    startGame();
    playMatch();
};


game();

