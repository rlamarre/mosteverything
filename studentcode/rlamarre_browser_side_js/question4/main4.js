var app = document.querySelector('#app');
var body = document.getElementById('body');

var win = false;
var lose = false; 

var buttonStart = document.getElementById('startClick');

var buttonWin = document.getElementById('winClick');
  
    buttonWin.style.top = (100 + Math.random() * 400) + 'px';
    buttonWin.style.left = (100 + Math.random() * 400) + 'px'; 


    // win game

function winGame (){
    if (!lose) {
        app.innerHTML = "You Win!";
    }
    win = true;
}

    // lose game

    function loseGame (){
        if (!win) {
            app.innerHTML = "You Lose!";
        }
        win = true;
    }

    // start Round

    function startRound (){
      
        console.log("this works")
      // say round has started
        app.innerHTML= "Round has Started";

    // click button to win

        buttonWin.addEventListener('click', () => {
            winGame();
        })
    // click anywhere else and lose

        body.addEventListener('click', () => {
            winGame();
        })       
    // lose after 1.5 s
        setTimeout(loseGame, 5000);

  };

  // click button to start round

buttonStart.addEventListener('click', () => {
    setTimeout(startRound, Math.random() * 2000 + 1000);
})