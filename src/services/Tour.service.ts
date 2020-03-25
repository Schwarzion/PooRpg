import { PartieService } from "./Partie.service";
import { Personnage } from "../models/Personnage";

export class TourService {


    private _partie: PartieService;
    private _tour: string[];

    constructor(partie: PartieService) {
        this._partie = partie;
        this._tour = [];
        this.go();
    }

    private go = () => {
        console.log('\n---Début de partie---');
        this.playTour();
        console.log("end");
        // while (this._partie.getGentilsLengh() > 0 || this._partie.getMechantsLengh() > 0) {
        // this.playTour();
        // }
    }
    private playTour = () => {
        let Gentils: Personnage[] = this._partie.getGentilsTab();
        let Mechants: Personnage[] = this._partie.getMechantsTab();
        this.rumble(Gentils, Mechants);
    }

    private rumble = (Gentils: Personnage[], Mechants: Personnage[]) => {
        while (Gentils.length > 0 && Mechants.length > 0) {
            console.log(Gentils.length);
            console.log(Mechants.length);
            if (Gentils[0]) {
                if (Mechants.length > 0) {
                    Gentils[0].attack(Mechants[0]);
                    Mechants[0].attack(Gentils[0]);
                    Gentils = Gentils.splice(0, 1);
                    Mechants = Mechants.splice(0, 1);
                    console.log(Gentils, Mechants);
                }
            }
        }
    }
}