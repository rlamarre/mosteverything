//var audio = document.createElement('audio');

var gameAudio = new Audio('audio/game_music.mp3');
function sound() {
    gameAudio.play();
}

var yum = new Audio('audio/yum.mp3');
function soundEffectBonus() {
    yum.play();
    yum.loop = false;

}


var gasp = new Audio('audio/gasp.mp3');
function soundEffectDeath() {
    gasp.play();
}



function soundStop() {
    gameAudio.pause();
}


// This sectin contains some game constants. It is not super interesting
var GAME_WIDTH = 375;
var GAME_HEIGHT = 600;

var ENEMY_WIDTH = 75;
var ENEMY_HEIGHT = 50;
var MAX_ENEMIES = 4;

var BONUS_WIDTH = 75;
var BONUS_HEIGHT = 50;
var MAX_BONUS = 1;

var PLAYER_WIDTH = 75;
var PLAYER_HEIGHT = 54;

// These two constants keep us from using "magic numbers" in our code
var LEFT_ARROW_CODE = 37;
var RIGHT_ARROW_CODE = 39;
var UP_ARROW_CODE = 38;
var DOWN_ARROW_CODE = 40;

// These two constants allow us to DRY
var MOVE_LEFT = 'left';
var MOVE_RIGHT = 'right';
var MOVE_UP = 'up';
var MOVE_DOWN = 'down';

// Preload game images
var images = {};
['enemy.png', 'stars.png', 'player.png', 'bonus.png', 'button.png', 'snowflake.png', 'car.png'].forEach(imgName => {
    var img = document.createElement('img');
    img.src = 'images/' + imgName;
    images[imgName] = img;
});

// This section is where you will be doing most of your coding

// Super Class

class Entity {
    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y);
    }
}

class Enemy extends Entity {
    constructor(xPos) {
        super()
        this.x = xPos;
        this.y = -ENEMY_HEIGHT;
        this.sprite = images['enemy.png'];

        // Each enemy should have a different speed
        this.speed = Math.random() / 1;
    }

    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;
    }

    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y);
    }
}

class Snowflake extends Entity {
    constructor(xPos) {
        super()
        this.x = xPos;
        this.y = -ENEMY_HEIGHT;
        this.sprite = images['snowflake.png'];
    }
}

class Bonus extends Entity {
    constructor(xPos) {
        super()
        this.x = xPos;
        this.y = -BONUS_HEIGHT;
        this.sprite = images['bonus.png']
        this.isTouched = false
        this.speed = Math.random() / 2 + 0.25;
    }

    touched() {
        this.isTouched = true
    }

    update(timeDiff) {
        this.y = this.y + timeDiff * this.speed;
    }

    doWeGetPoints() {
        if (this.isTouched === false) {
            console.log('FFF')
            return true
        }
    }



    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y);
    }
}

class Player extends Entity {
    constructor() {
        super()
        this.x = 2 * PLAYER_WIDTH;
        this.y = GAME_HEIGHT - PLAYER_HEIGHT - 30;
        this.sprite = images['player.png'];
    }

    // This method is called by the game engine when left/right arrows are pressed
    move(direction) {
        if (direction === MOVE_LEFT && this.x > 0) {
            this.x = this.x - PLAYER_WIDTH;
        }
        else if (direction === MOVE_RIGHT && this.x < GAME_WIDTH - PLAYER_WIDTH) {
            this.x = this.x + PLAYER_WIDTH;
        }
        else if (direction === MOVE_UP && this.y > 0) {
            this.y = this.y - PLAYER_HEIGHT;
        }
        else if (direction === MOVE_DOWN && this.y < GAME_HEIGHT + PLAYER_HEIGHT) {
            this.y = this.y + PLAYER_HEIGHT;
        }
    }

    render(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y);
    }
}





/*
This section is a tiny game engine.
This engine will use your Enemy and Player classes to create the behavior of the game.
The engine will try to draw your game at 60 frames per second using the requestAnimationFrame function
*/
class Engine {
    constructor(element) {
        // Setup the player
        this.player = new Player();

        // Setup enemies, making sure there are always three
        this.setupEnemies();

        // Setup Bonuses, making sure there is only 1
        this.setupBonus();

        // Setup the <canvas> element where we will be drawing
        var canvas = document.createElement('canvas');
        canvas.id = 'canvas';
        canvas.width = GAME_WIDTH;
        canvas.height = GAME_HEIGHT;
        element.appendChild(canvas);

        this.ctx = canvas.getContext('2d');

        // Since gameLoop will be called out of context, bind it once here.
        this.gameLoop = this.gameLoop.bind(this);
    }

    /*
     The game allows for 5 horizontal slots where an enemy can be present.
     At any point in time there can be at most MAX_ENEMIES enemies otherwise the game would be impossible
     */
    setupEnemies() {
        if (!this.enemies) {
            this.enemies = [];
        }

        while (this.enemies.filter(e => !!e).length < MAX_ENEMIES) {
            this.addEnemy();
        }
    }

    setupBonus() {
        if (!this.bonuses) {
            this.bonuses = [];
        }

        while (this.bonuses.filter(e => !!e).length < MAX_BONUS) {
            this.addBonus();
        }
    }

    // This method finds a random spot where there is no enemy, and puts one in there
    addEnemy() {
        var enemySpots = GAME_WIDTH / ENEMY_WIDTH + 1;

        var enemySpot = 0;
        // Keep looping until we find a free enemy spot at random
        while (!enemySpot || this.enemies[enemySpot]) {
            enemySpot = Math.floor(Math.random() * enemySpots);
        }

        this.enemies[enemySpot] = new Enemy(enemySpot * ENEMY_WIDTH - ENEMY_WIDTH);
    }

    addBonus() {
        var bonusSpots = GAME_WIDTH / BONUS_WIDTH + 1;
        var bonusSpot = 0;
        // Keep looping until we find a free enemy spot at random
        while (!bonusSpot || this.bonuses[bonusSpot]) {
            bonusSpot = Math.floor(Math.random() * bonusSpots);
        }

        this.bonuses[bonusSpot] = new Bonus(bonusSpot * BONUS_WIDTH - BONUS_WIDTH);
    }

    // This method kicks off the game
    start() {
        this.score = 0;
        this.lastFrame = Date.now();
        sound();

        // Listen for keyboard left/right and update the player
        document.addEventListener('keydown', e => {
            if (e.keyCode === LEFT_ARROW_CODE) {
                this.player.move(MOVE_LEFT);
            }
            else if (e.keyCode === RIGHT_ARROW_CODE) {
                this.player.move(MOVE_RIGHT);
            }
            else if (e.keyCode === UP_ARROW_CODE) {
                this.player.move(MOVE_UP);
            }
            else if (e.keyCode === DOWN_ARROW_CODE) {
                this.player.move(MOVE_DOWN);
            }
        });

        this.gameLoop();
    }

    /*
    This is the core of the game engine. The `gameLoop` function gets called ~60 times per second
    During each execution of the function, we will update the positions of all game entities
    It's also at this point that we will check for any collisions between the game entities
    Collisions will often indicate either a player death or an enemy kill

    In order to allow the game objects to self-determine their behaviors, gameLoop will call the `update` method of each entity
    To account for the fact that we don't always have 60 frames per second, gameLoop will send a time delta argument to `update`
    You should use this parameter to scale your update appropriately
     */
    gameLoop() {
        // Check how long it's been since last frame
        var currentFrame = Date.now();
        var timeDiff = currentFrame - this.lastFrame;

        // Increase the score!
        this.score += timeDiff;

        // Call update on all enemies
        this.enemies.forEach(enemy => enemy.update(timeDiff));

        // Call update on all bonuses
        this.bonuses.forEach(bonus => bonus.update(timeDiff));


        // Draw everything!
        this.ctx.drawImage(images['stars.png'], 0, 0); // draw the star bg
        this.enemies.forEach(enemy => enemy.render(this.ctx)); // draw the enemies
        this.player.render(this.ctx); // draw the player
        this.bonuses.forEach(bonus => bonus.render(this.ctx))


        // Text for bonus win points

        if (this.bonuses.some((element) => {
            return (element.isTouched === true)
        }) === true) {
            soundEffectBonus()
            this.ctx.font = 'bold 60px Impact';
            this.ctx.fillStyle = '#FFCC00';
            this.ctx.fillText('YUM', 250, 60);
            this.ctx.fillText('+250', 230, 120);
        }

        // record of Poutine Consumption

        // function makePoutine(){
        //     this.ctx.drawImage(images['bonus.png'],0,0)
        // }

        // if(this.bonuses.some((element) => {
        //     return (element.isTouched === true)
        // })=== true){
        //     for(var i = 1; i <= 4; i++){
        //         makePoutine()
        //     }

        // Check if any enemies should die
        this.enemies.forEach((enemy, enemyIdx) => {
            if (enemy.y > GAME_HEIGHT) {
                delete this.enemies[enemyIdx];
            }
        });
        this.setupEnemies();


        // Check if any bonuses should disappear

        this.bonuses.forEach((bonus, bonusIdx) => {
            if (bonus.y > GAME_HEIGHT + 500) {
                delete this.bonuses[bonusIdx];
            }
        });

        this.setupBonus();

        // check if player is eating


        // Check if player is dead
        if (this.isPlayerDead()) {
            // If they are dead, then it's game over!
            soundEffectDeath()
            soundStop()
            this.ctx.font = 'bold 30px Impact';
            this.ctx.fillStyle = '#FF0000';
            this.ctx.fillText(this.score + ' GAME OVER', 5, 30);
            this.ctx.drawImage(images['button.png'], -55, 0)

            var canvas = document.getElementById('canvas');
            var rect = {
                x: -55,
                y: 0,
                width: 500,
                height: 500
            };
            function getMousePos(canvas, event) {
                var rect = canvas.getBoundingClientRect();
                return {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top
                };
            }
            function isInside(pos, rect) {
                return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
            }
            canvas.addEventListener('click', function (evt) {
                var mousePos = getMousePos(canvas, evt);
                if (isInside(mousePos, rect)) {
                    location.reload();;
                }
            }, false);
        }


        // document.addEventListener('click', () => location.reload(true));        }

        else {

            if (this.isPlayerEating()) {

                // // If they are eating they get a bonus!
                // this.ctx.font = 'bold 30px Impact';
                // this.ctx.fillStyle = '#FFCC00';
                // this.ctx.fillText(this.score + ' YUM *** + 250 pts + ***', 15, 30);
                //console.log("first score :", this.score);
                // this.score += 250;
                //console.log("second score :", this.score);

            }
            // If player is not dead, then draw the score
            this.ctx.font = 'bold 30px Impact';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillText(this.score, 5, 30);


            // Set the time marker and redraw
            this.lastFrame = Date.now();
            requestAnimationFrame(this.gameLoop);
        }


    }

    // reStart () {
    //     var reStartButton = document.createElement('button');
    //     reStartButton.innerText = 'Play';
    //     reStartButton.id = 'playAgain';
    //     reStartButton.style.width = '200px';
    //     reStartButton.style.height = '100px';
    //     app.appendChild(reStartButton);

    //     reStartButton.addEventListener('click', () => location.reload(true));
    // }

    isPlayerEating() {

        var self = this

        return this.bonuses.some(function (bonus) {
            var bonusAndPlayerInSameColumn = bonus.x === self.player.x
            var bonusReachedPlayer = (bonus.y + BONUS_HEIGHT) >= self.player.y
            var bonusIsPassedPlayer = bonus.y > (self.player.y + PLAYER_HEIGHT)
            if (bonusAndPlayerInSameColumn && bonusReachedPlayer && !bonusIsPassedPlayer) {
                if (bonus.doWeGetPoints() === true) {
                    self.score = self.score + 250
                }
                bonus.touched()
            }
            return bonusAndPlayerInSameColumn && bonusReachedPlayer && !bonusIsPassedPlayer
        })
    }

    isPlayerDead() {
        var self = this
        return this.enemies.some(function (enemy) {
            var enemyAndPlayerInSameColumn = enemy.x === self.player.x
            var enemyReachedPlayer = (enemy.y + ENEMY_HEIGHT) >= self.player.y
            var enemyIsPassedPlayer = enemy.y > (self.player.y + PLAYER_HEIGHT)
            return enemyAndPlayerInSameColumn && enemyReachedPlayer && !enemyIsPassedPlayer;
        })
    }

}




// This section will start the game
var gameEngine = new Engine(document.getElementById('app'));
gameEngine.start();