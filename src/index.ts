class Voiture {
    //Variables d'instance
    private _marque : string;
    private _couleur: string;

    //Variables de classe
    private static _nbVoiture: number;

    contrustor(marque="", couleur="")
    {
        this._marque = marque;
        this._couleur = couleur;
        Voiture._nbVoiture += 1; 
    }

    //Getters
    get marque()
    {
        return this._marque;
    }

    set marque(marque: string)
    {
        this._marque = marque;
    }

    get couleur()
    {
        return this._couleur;
    }

    set couleur(couleur: string)
    {
        this._couleur = couleur;
    }

    //Méthodes d'intance
    rouler = (vitesse: number) => {
        console.log(`Je roule à ${vitesse} km/h`);
    }
}

class VoitureDeSport extends Voiture {
    private _superVitesse: number;

    constructor(marque = "", couleur= "", superVitesse = 400) {
        super(marque, couleur);
        this._superVitesse = superVitesse;
    }
}