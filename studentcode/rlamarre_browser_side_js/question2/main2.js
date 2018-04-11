var mainDiv = document.querySelector('#app');
var win = false;
var lose = false;


function winGame() {
    console.log(lose)
   if (!lose) {
       console.log('heyy')
       mainDiv.innerText = "you have succeeded";
   }
    win = true;
}

function loseGame(){
    if (!win) mainDiv.innerText = "you have failed";
    console.log('allo')
    lose = true
}

function startRound() {
    mainDiv.innerText = "the round has started";

    setTimeout(loseGame, 500)

    mainDiv.addEventListener('click', () => { 
        winGame();
    })
    
    document.addEventListener('keydown', event => {
        if(event.keyCode == 32){
            winGame();
        }
    })
        }
  

setTimeout(startRound, Math.floor(Math.random() * 2000 + 1000))