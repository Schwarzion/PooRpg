import { Personnage } from "./Personnage";


export class Gentil extends Personnage {

    constructor(nom: string, arme: number) {
        super(nom, 15, 20, 0, 1);
    }
}
