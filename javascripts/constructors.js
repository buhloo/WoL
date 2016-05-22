// Constructors for World of Legends

"use strict";

var gauntlet = (function(object){

  //COMBATANT CONSTRUCTOR FUNCTION
  object.Combatant = function(){
    this.health = 100;
    this.damage = 10;
    this.applyModifiers = function() {
      this.health *= this.raceHealthModifier;
      this.damage *= this.raceDamageModifier;

      this.health *= this.classHealthModifier;
      this.damage *= this.classDamageModifier;

      this.damage *= this.weaponDamageModifier;
      if (this.hasOwnProperty("enemyHealthPenalty")) {
          this.health *= this.enemyHealthPenalty;
      }
    };
  };

  // FEDERATION (RACE 1) CONSTRUCTOR FUNCTION
  object.Human = function(){
    this.raceHealthModifier = 1.4;
    this.raceDamageModifier = 1.1;
  };

  // KLINGON (RACE 2) CONSTRUCTOR FUNCTION
  object.Elf = function(){
    this.raceHealthModifier = 1.1;
    this.raceDamageModifier = 1.4;
  };

  // CRUISER (CLASS 1) CONSTRUCTOR FUNCTION
  object.Warrior = function(){
    this.classHealthModifier = 1.2;
    this.classDamageModifier = 1.3;
  };

  // DESTROYER (CLASS 2) CONSTRUCTOR FUNCTION
  object.Mage = function(){
    this.classHealthModifier = 1;
    this.classDamageModifier = 1.5;
  };

  //LASER (WEAPON 1) CONSTRUCTOR FUNCTION
  object.Sword = function(){
    this.weaponDamageModifier = 1.2;
  };

  //PHOTON TORPEDO (WEAPON 2) CONSTRUCTOR FUNCTION
  object.Bow = function(){
    this.weaponDamageModifier = 1.2;
  };

  //PULSE CANNON (WEAPON 3) CONSTRUCTOR FUNCTION
  object.Wand = function(){
    this.weaponDamageModifier = 1.2;
  };

  // PLAYER CONSTRUCTOR FUNCTION
  object.Player = function(name){
    this.name = name;
  };

  // ENEMEY CONSTRUCTOR FUNCTION
  object.Enemy = function(){
    this.name = 'Enemy Vessel'
    this.enemyHealthPenalty = 0.9;
  };

  return object;
})(gauntlet || {});
