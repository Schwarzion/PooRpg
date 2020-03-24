import { Gentil } from "./models/Gentil";
import { Mechant } from "./models/Mechant";
import { Arme, Hache, Epee } from "./models/Arme";

const readline = require('readline');
const chalk = require('chalk');

// let q1: string = 'Ajouter un personnage [y/n]?';
// let q2: string = 'Quel nom lui donner?';
// let q3: string = 'Quel arme lui attribuer [1/2]?';

console.log('-------------------------------------------------');
// let players = [];
// let ennemies = [];
let armeNb: number = 1;
let player: Gentil = new Gentil("Julien", getArme(armeNb));
//players.push(player)
let ennemy: Mechant = new Mechant(getArme(3));
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

function getArme(nb: number) {
    if (nb === 1) {
        return new Hache();
    }
    else if (nb === 2) {
        return new Epee();
    }
    else
        return new Arme(3, 6, 5);
}