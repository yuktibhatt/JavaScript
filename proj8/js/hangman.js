var prog_lang = [
    "python",
    "javascript",
    "mongodb",
    "json",
    "java",
    "html",
    "css",
    "c",
    "csharp",
    "golang",
    "kotlin",
    "php",
    "sql",
    "ruby"
]

let answer ="";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
    answer = prog_lang[Math.floor(Math.random() * prog_lang.length)];
    
}

function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
        <button
          class="btn btn-lg btn-primary m-2"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  }

  function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
    
    if(answer.indexOf(chosenLetter) >= 0){
      guessedWord();
      checkGameWon();

    } else if (answer.indexOf(chosenLetter) === -1){
      mistakes++;
      updateMistakes();
      checkGameLost();
      updateHangmanPic();
    }
  }

  function checkGameWon(){
    if (wordStatus=== answer) {
      document.getElementById('keyboard').innerHTML = 'You Won!';
    }
  }

  function checkGameLost(){
    if(mistakes === maxWrong){
      document.getElementById('wordSpotlight').innerHTML = 'The answer was : ' + answer;
      document.getElementById('keyboard').innerHTML = 'You lose :( ';
    }
  }

  function updateHangmanPic() {
    document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
  }


  function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
    
  }
  function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
  }

  function reset(){
    mistakes = 0;
    guessed =[];
    document.getElementById('hangmanPic').src = './images/0.jpg';

    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
  }


  document.getElementById('maxWrong').innerHTML = maxWrong;


randomWord();
generateButtons();
guessedWord();



