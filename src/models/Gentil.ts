import { Personnage } from "./Personnage";
import { Arme } from "./Arme";

export class Gentil extends Personnage {

    constructor(nom: string, arme: Arme) {
        super(nom, 30, 30, 0, arme);
    }
}
