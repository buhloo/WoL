gauntlet.Human.prototype = new gauntlet.Combatant();
gauntlet.Warrior.prototype = new gauntlet.Human();
gauntlet.Sword.prototype = new gauntlet.Warrior();
gauntlet.Player.prototype = new gauntlet.Sword();
var andrew = new gauntlet.Player("Andrew");

gauntlet.Elf.prototype = new gauntlet.Combatant();
gauntlet.Mage.prototype = new gauntlet.Elf();
gauntlet.Wand.prototype = new gauntlet.Mage();
gauntlet.Enemy.prototype = new gauntlet.Wand();
var patrick = new gauntlet.Enemy();

andrew.applyModifiers();
patrick.applyModifiers();

function randomDamageMultiplier(min,max){
	return Math.random() * (max-min) + min;
}

var playerName = document.getElementById('playerName')
var enemyName = document.getElementById('enemyName')

var playerHealth = document.getElementById('playerHealth')
var enemyHealth = document.getElementById('enemyHealth')

playerName.innerHTML = "<li>" + andrew.name + "</li>";
enemyName.innerHTML = "<li>" + patrick.name + "</li>";

playerHealth.innerHTML = andrew.health.toFixed([1]);
enemyHealth.innerHTML = patrick.health.toFixed([1]);

 var attackButton = document.getElementById('attackButton')
 attackButton.addEventListener("click", ()=>{
 	if(andrew.health <= 0 || patrick.health <= 0){
 		alert("Dead fighters don't fight. Please don't try.")
 		return;
 	}

 	patrick.health -= randomDamageMultiplier(.75,1.1)*andrew.damage;

 	if(patrick.health <= 0){
 		patrick.health = 0;
 		playerHealth.innerHTML = andrew.health.toFixed([1]);
 		enemyHealth.innerHTML = patrick.health;
 		alert("Game Over. Player Andrew Wins.");
 		return;
 	}

 	andrew.health -= randomDamageMultiplier(.75,1.1)*patrick.damage;

 	if(andrew.health <= 0){
 		andrew.health = 0;
 		playerHealth.innerHTML = andrew.health;
 		enemyHealth.innerHTML = patrick.health.toFixed([1]);
 		alert("Game Over. Enemy Patrick Wins.");
 	}

 	playerHealth.innerHTML = andrew.health.toFixed([1]);
 	enemyHealth.innerHTML = patrick.health.toFixed([1]);
 })

 var resetButton = document.getElementById('resetButton')
 resetButton.addEventListener("click", ()=>{
 	andrew.health = 100;
 	andrew.damage = 10;
 	patrick.health = 100;
 	patrick.damage = 10;
	andrew.applyModifiers();
	patrick.applyModifiers();
	playerHealth.innerHTML = andrew.health.toFixed([1]);
	enemyHealth.innerHTML = patrick.health.toFixed([1]);
 })
 	 	



