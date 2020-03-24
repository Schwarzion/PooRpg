import { Arme } from "./Arme";

export class Hache extends Arme {
    constructor(minDmg = 4, maxDmg = 8, criticChance = 10) {
        super(minDmg, maxDmg, criticChance)
    }
}