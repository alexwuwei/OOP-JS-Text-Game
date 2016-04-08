//coder constructor and methods

function Coder (name, skill) {
  this.name = name;
  this.skill = skill;
  this.hp = 111;
};

Coder.prototype.sarcasm = function(target) {
  target.takeSarcasm(this.skill);
}

Coder.prototype.takeSarcasm = function (damage) {
  this.hp -= damage;
}

//UberCoder constructor and methods

function UberCoder (name, skill, uberskill) {
  Coder.call(this, name, skill);
  this.uberskill = uberskill;
}

UberCoder.prototype = new Coder();

UberCoder.prototype.useUberSkill = function(target) {
  target.takeSarcasm(this.uberskill);
}

//player instances
var reginald = new Coder('reginald coder', 12);
var matt = new UberCoder('matt uber coder', 32, 50);
var kelly = new Coder ('kelly coder', 10);
var mary = new UberCoder('tom uber coder', 30, 51);

//win lose function
function winLose (hitter, target) {
  if (target.hp <= 0) {
    console.log(target.name + 'loses!' + hitter.name + 'wins!');
  }
}

//weapons

var cssJoke = 3;
var consoleJoke = 4;
var semicolonJoke = 5;

//powerups

var redbull = 3;
var coffee = 4;
var unfoundedSelfSatisfaction = 5;

function addPower(coder, weapon) {
  coder.skill += weapon;
}

function addHp(coder, powerup) {
  coder.hp += powerup;
}
