import { Gentil } from "./models/Gentil";
import { Mechant } from "./models/Mechant";

const readline = require('readline');
const chalk = require('chalk');

// let q1: string = 'Ajouter un personnage [y/n]?';

// let q2: string = 'Quel nom lui donner?';

// let q3: string = 'Quel arme lui attribuer [1/2]?';

console.clear();
let players = [];
let ennemies = []
let player: Gentil = new Gentil("Michel", 1);
players.push(player)
let ennemy: Mechant = new Mechant();
ennemies.push(ennemy);
while (!(player.isKilled() || ennemy.isKilled())) {
    player.attack(ennemy);
    ennemy.attack(player);
    player.attack(ennemy);
}


