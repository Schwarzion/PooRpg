import { Personnage } from "./Personnage";


export class Gentil extends Personnage {

    constructor(nom: string, arme: number) {
        super(nom, 50, 50, 0, 1);
    }
}
