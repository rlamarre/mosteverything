var clickme = document.querySelector('#clickme');
var end = false;
var win = false;


clickme.addEventListener('click', winGame);

function winGame () {
   if (!end) clickme.innerHTML = "you win";
   win = true;
}

function endGame (){
      if (!win)  clickme.innerHTML = "you lose";
        end = true;
    }


setTimeout(endGame, 1000) // not exactly //  first parameter is a function that, if clicked, returns you win, and if not clicked returns you lose *