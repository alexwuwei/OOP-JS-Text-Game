'use strict';

//es6 classes
class Coder {
  constructor(name, skill) {
    this.name = name;
    this.skill = skill;
    this.hp = 111;
  }
  sarcasm(target) {
    target.takeSarcasm(this.skill)
  }
  takeSarcasm(damage) {
    this.hp -= damage;
  }
}

class UberCoder extends Coder {
  constructor(name, skill, uberskill){
    super(name, skill);
    this.uberskill = uberskill;
  }
  useUberSkill(target) {
    target.takeSarcasm(this.uberskill);
  }
}

//player instances
var reginald = new Coder('reginald coder', 12);
var mattU = new UberCoder('matt uber coder', 32, 50);
var kelly = new Coder ('kelly coder', 10);
var maryU = new UberCoder('tom uber coder', 30, 51);

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

//win lose function
function winLose (hitter, target) {
  if (target.hp <= 0) {
    console.log(target.name + 'loses!' + hitter.name + 'wins!');
  }
}
