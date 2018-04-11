var app = document.querySelector('#app'); // place code in this variable, connect it to this part of the html file
var win = false;
var lose = false;

// make button
var button = document.getElementById('btn');
    button.style.display = "none";
    button.style.top = (100 + Math.random() * 400) + 'px';
    button.style.left = (100 + Math.random() * 400) + 'px';

// win game

function winGame(){
 if (!lose) {
     app.innerHTML= "You Win!"
 }
 win = true;
}

// lose game
function loseGame(){
    if (!win) {
        app.innerHTML= "You Lose!"
    }
    lose = true;
}



function startRound(){
    // start round timer
    //text to say round has started
    // button appears
   

    setTimeout(loseGame, 500);
    app.innerHTML= "Round has Started";

    // click on button ends round
    button.style.display = "";
    button.addEventListener('click', () => { 
        winGame();
    })
    
}

setTimeout(startRound, Math.floor(Math.random () * 2000) + 1000)