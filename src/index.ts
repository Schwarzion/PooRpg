import { Gentil } from "./models/Gentil";
import { Mechant } from "./models/Mechant";

const readline = require('readline');
const chalk = require('chalk');

// let q1: string = 'Ajouter un personnage [y/n]?';
// let q2: string = 'Quel nom lui donner?';
// let q3: string = 'Quel arme lui attribuer [1/2]?';

console.log('-------------------------------------------------');
// let players = [];
// let ennemies = [];
let player: Gentil = new Gentil("Michel", 1);
//players.push(player)
let ennemy: Mechant = new Mechant();
//ennemies.push(ennemy);

let partie: boolean = true;
while (partie) {
    player.attack(ennemy);
    if (ennemy.isKilled())
        break;
    ennemy.attack(player);
    if (player.isKilled())
        break;
}