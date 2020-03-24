import { Personnage } from "./Personnage";

export class Mechant extends Personnage {

    constructor()
    {
        let nom = "La miche";
        super(nom, 70, 70, 0, 3);
    }
}