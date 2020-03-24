import { Personnage } from "./Personnage";
import { Arme } from "./Arme";
export class Mechant extends Personnage {

    constructor(arme: Arme)
    {
        let nom = "Coronavirus";
        super(nom, 40, 40, 0, arme);
    }
}