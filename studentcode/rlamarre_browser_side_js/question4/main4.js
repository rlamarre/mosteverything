var app = document.querySelector('#app');
var body = document.getElementById('body');

var win = false;
var lose = false;

var buttonStart = document.getElementById('startClick');
var buttonWin = document.getElementById('winClick');
buttonWin.style.display = "none"

buttonWin.style.top = (100 + Math.random() * 400) + 'px';
buttonWin.style.left = (100 + Math.random() * 400) + 'px';


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

    buttonStart.removeEventListener('click', startRound)

    // say round has started

    // * if this is included code doesn't work*

    app.innerHTML = "Round has Started";
    app.removeinnerHTML = "Round has Started";


    // play round

    // remove start button
    buttonStart.style.display = "none";
    // show win button
    buttonWin.style.display = "block";
    // click button to win
    buttonWin.addEventListener('click', winGame)

    // click anywhere else and lose * doesn't work *
    
    // document.addEventListener('click', loseGame);

    // set timer 
    setTimeout(loseGame, 1500);

}


// click button to start round

buttonStart.addEventListener('click', startRound)