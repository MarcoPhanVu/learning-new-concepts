// const dataValues = document.querySelectorAll(".value")
// const resultsContainer = document.querySelectorAll(".result")

const oopDataValue = document.querySelectorAll("[oop-data-value]")
const oopDataResult = document.querySelectorAll("[oop-data-result]")



// 1st Panel
function Fighter(name, faction = "Hierarculus") { // Convention: Object and Class name's first letter must be Capitalized 
    //Private attributes
    let health = 100;

    //Public attributes
    this.name = name;
    this.faction = faction;

    this.speed = 15;
    this.armor = 15;
    this.attack = 15;
    this.inventory = 15;
    this.skillSet = [];
    
    // console.log("I'm " + this.name + " and I'm a Fighter.")
    
    introduceSelf = function () {
        console.log("My name is " + this.name);
        console.log("My speed is " + this.speed);
    }

    this.getHealth = function () {
        return health;
    }

    this.increaseHealth = function(by) {
        health += by;
    }

    this.setHealth = function(hp) {
        health = hp;
    }
}


Fighter.prototype.jump = function() {
    console.log(this.name + " jumped");
}

Fighter.prototype.increaseHealth = function(by) {
    let newHealth = this.getHealth() + parseInt(by, 10);
    this.setHealth(newHealth);
    // console.log("increased health: " + this.getHealth())
}

Fighter.prototype.increaseSpeed = function(by) {
    this.speed += by;
    this.speedChanged = true;
    console.log("Speed increased")
}                                                           

const Clara = new Fighter("Clara");

function Panzerstecher(name, faction, weapon = "Piercer") {
    Fighter.call(this, name, faction);
    // console.log("new Panzerstecher created");
    this.weapon = weapon;
}

const Mark = new Panzerstecher("Mark", "Tryrosaurus", "Rapier")
const Kimusk = new Panzerstecher("Kimusk", "Inuk", "Panzerfaust")
// console.log(Mark);

// console.log("Mark tool = " + Mark.weapon);
// console.log("Kimusk tool = " + Kimusk.weapon);


// Rapier, Estoc, 

// Clara.increaseSpeed(12);
// console.log("Clara's speed = " + Clara.speed);


const tanker = {
    introduceSelf: function () {
        return `${this.name} is a ${this.faction}`;
    }
}

const name = "Minh";