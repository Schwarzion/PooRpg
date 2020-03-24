import { Arme } from "./Arme";

export class Epee extends Arme {
    constructor(minDmg = 4, maxDmg = 10, criticChance = 5) {
        super(minDmg, maxDmg, criticChance)
    }
}