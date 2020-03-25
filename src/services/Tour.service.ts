import { PartieService } from "./Partie.service";

export class TourService {

    private _partie: PartieService;
    
    constructor(partie: PartieService) 
    {
        this._partie = partie;
    }


}