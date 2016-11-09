// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.speed = Math.random() * 200 + 100;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt, speed) {
    if (this.x > 500) {
        this.x = -80;
        this.speed = Math.random() * 200 + 100;
    } else {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.x += (this.speed * dt);
    }

    // Defining enemy locations
    enemyLoc = {
        x: this.x,
        y: this.y
    };
    // Collision resets player & gives losing message
    if ((player.y > (enemyLoc.y - 40)) && (player.y < (enemyLoc.y + 40)) &&
        (player.x < (enemyLoc.x + 40)) && (player.x > enemyLoc.x - 40)) {
        setTimeout(function() {
            alert("You Lose! Try again!");
            player.reset();
        }, dt);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// ----- New Bugs -----
var Newbug = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.speed = Math.random() * 100 - 300;
    this.sprite = 'images/newBug.png';
};

Newbug.prototype.update = function(dt, speed) {
    if (this.x < -80) {
        this.x = 500;
        this.speed = Math.random() * 100 - 300;
    } else {
        this.x += (this.speed * dt);
    }

    // Defining enemy locations
    bugLoc = {
        x: this.x,
        y: this.y
    };
    // Collision resets player & gives losing message
    if ((player.y > (bugLoc.y - 40)) && (player.y < (bugLoc.y + 40)) &&
        (player.x < (bugLoc.x + 40)) && (player.x > bugLoc.x - 40)) {
        setTimeout(function() {
            alert("You Lose! Try again!");
            player.reset();
        }, dt);
    }
};
Newbug.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 100;
    this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function() {
    if (player.y < 100) {
        setTimeout(function() {
            player.reset();
            alert("You Win!");
        }, 10);


    }
};

// Draw the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Control movement and boundaries
Player.prototype.handleInput = function(key) {

    switch (key) {
        case 'left':
            if (this.x >= 100) {
                this.x = this.x - 101;
            };
            break;
        case 'right':
            if (this.x <= 375) {
                this.x = this.x + 101;
            };
            break;
        case 'up':
            if (this.y >= 80) {
                this.y = this.y - 83;
            };
            break;
        case 'down':
            if (this.y <= 400) {
                this.y = this.y + 83;
            };
            break;
    };
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var bug1 = new Enemy(-80, 146);
var bug2 = new Enemy(-90, 230);
var bug3 = new Enemy(-100, 313);
var bug4 = new Newbug(-110, 146);
var bug5 = new Newbug(-120, 230);
var bug6 = new Newbug(-130, 313);
var allEnemies = [bug1, bug2, bug3, bug4, bug5, bug6];

// Set player starting location
var player = new Player(202, 458);

// Set player location after reset
Player.prototype.reset = function() {
    this.x = 202;
    this.y = 458;
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});