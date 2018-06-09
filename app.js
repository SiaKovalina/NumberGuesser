//Game values
let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI elements
const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBTN = document.getElementById('guess-btn'),
    guessInput = document.getElementById('guess-input'),
    message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


//Play again event listener
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {

        window.location.reload();
        
    }
})

guessBTN.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    console.log(guess);
    //Validate input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please, enter a number between ${min} and ${max}`, 'red');
    }

    if (guess === winningNum) {

        gameOver(true, `${winningNum} is correct! You win!`)

    } else {
        //Wrong number
        guessesLeft -= 1;
        //Tell user the number is wrong
        setMessage(`Guess is not correct. ${guessesLeft} guesses left.`, 'red');
        guessInput.value = '';

        //Game over
        if(guessesLeft === 0) {
            gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)
        } else {

        }
    }
});

function getRandomNum(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);

    //Play again
    guessBTN.value = 'Play Again';
    guessBTN.className += 'play-again';
}

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}