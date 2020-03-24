import { Personnage } from "./Personnage";

export class Mechant extends Personnage {

    constructor()
    {
        let nom = "La miche";
        super(nom, 20, 30, 0, 3);
    }
}