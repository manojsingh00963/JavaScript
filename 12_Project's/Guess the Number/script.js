let randomNumber = (parseInt(Math.random() * 100 + 1))

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.result');

const p = document.createElement('p');
p.setAttribute('id','newPara');
// p.innerHTML = 'hero'
// StartOver.appendChild(p);

let prevGuess = [];
let numGuess = 1;

let PlayGame = true;

if (PlayGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    // check valid input given by user.(important!)
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a valid number')
    } else if (guess > 100) {
        alert('Please enter a number less then 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over . Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    // check input .
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess < randomNumber ){

        displayMessage(`Number is TOOO low`);

    }else if(guess > randomNumber){
        
        displayMessage(`Number is TOOO High`);
    }

}

function displayGuess(guess) {
    userinput.value = '';
    guessSlot.innerHTML += `${guess},`
    checkGuess()
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    // user input  value emptm ( dom meanuplation)

    lowOrHi.innerHTML =  `<h2 id="display_msz"> ${message} </h2>`

}


function endGame() {

    userinput.value = ''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame" >Start new Game</h2>`;
    StartOver.appendChild(p)
    PlayGame = false;
    newGame();

}
function newGame() {

    const newGameButton  = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        
        randomNumber = (parseInt(Math.random() * 100 + 1));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userinput.removeAttribute('disabled');
        StartOver.removeChild(p);
        PlayGame = true ;
    })

}
