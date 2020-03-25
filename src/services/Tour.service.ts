import { PartieService } from "./Partie.service";

export class TourService {


    private _partie: PartieService;
    private _tour: string[];

    constructor(partie: PartieService) 
    {
        this._partie = partie;
        this._tour = [];
        this.go();
    }

    private go = () => {
        console.log('\nDébut de partie');
    }
}