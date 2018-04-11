// create variable to hold content

var app = document.querySelector('#app');
var body = document.getElementById('body');
// create variable for win and lose
var win = false;
var lose = false;
//create variables for buttons
var buttonStart = document.getElementById('startClick');
var buttonWin = document.getElementById('winClick');
// set Win button to invisible at first
buttonWin.style.display = "none"
// set Win button to appear in random position
buttonWin.style.top = (100 + Math.random() * 400) + 'px';
buttonWin.style.left = (100 + Math.random() * 400) + 'px';
// create div for start Round text
var roundStartText = document.createElement('div');


// win game

function winGame() {
    if (!lose) {
        app.innerHTML = "You Win!";
    }
    win = true;
}

// lose game

function loseGame() {
    if (!win) {
        app.innerHTML = "You Lose!";
    }
    win = true;
}

// start Round

function startRound() {

    // remove start game button
    buttonStart.removeEventListener('click', startRound)

    // say round has started in new div to not erase existing div html

    roundStartText.innerText = "round has started";
    app.appendChild(roundStartText);

    // play round

    // remove start button
    buttonStart.style.display = "none";
    // show win button
    buttonWin.style.display = "block";
    // click button to win
    buttonWin.addEventListener('click', winGame)

    // click anywhere else and lose  - prevent bubbling

    event.stopPropagation()

    document.addEventListener('click', loseGame);

    // set timer 
    setTimeout(loseGame, 1500);

}


// click button to start round

buttonStart.addEventListener('click', startRound)

