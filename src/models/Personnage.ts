import { Arme } from "./Arme";
import { Hache } from "./Hache";
import { Epee } from "./Epee";

export class Personnage {

    private _nom: string;
    private _pv: number;
    private _pvMax: number;
    private _defense: number;
    private _arme: Arme;

    constructor(nom: any, pv: number, pvMax: number, defense = 0, armeNb: number) {
        this._nom = nom;
        this._pv = pv;
        this._pvMax = pvMax;
        this._defense = defense;
        this._arme = this.setArme(armeNb);
    }

    public attack = (cible: Personnage) => {
        let dmg = this._arme.getDmg();
        console.log(`Vous attaquez ${cible.getNom()} avec ${this._arme.constructor.name}\nMontant des dégats : ${dmg}`);
        cible.getAttacked(cible, dmg);
    }

    public getAttacked = (cible: Personnage, dmg: number) => {
        cible._pv -= dmg;
        console.log(`Point de vie de ${cible.getNom()} : ${cible.getPv()}\n`);
    }

    public isKilled = () => {
        if (this._pv <= 0)
        {
            console.log(`${this._nom} a été tué`);
            return true;
        }
        else
            return false;
    }

    //Getters

    /**
     * Get Name
     * 
     * @return string
     */
    public getNom = () => {
        return this._nom;
    }

    /**
     * Get actual health point
     * 
     * @return number
     */
    public getPv = () => {
        return this._pv;
    }

    /**
       * Get max health point
       * 
       * @return number
       */
    public getPvMax = () => {
        return this._pvMax;
    }

    /**
   * Get defense point
   * 
   * @return number
   */
    public getDefense = () => {
        return this._defense;
    }


    //Setters

    /**
     * set name
     * 
     * @return string
     */
    public setNom = (nom: string) => {
        this._nom = nom;
    }

    /**
     * set actual health point
     * 
     * @return number
     */
    public setPv = (pv: number) => {
        this._pvMax = pv;
    }

    /**
    * set max health point
    * 
    * @return number
    */
    public setPvMax = (pvMax: number) => {
        this._pvMax = pvMax;
    }

    /**
    * set defense point
    * 
    * @return number
    */
    public setDefense = (defense: number) => {
        this._defense = defense;
    }

    /**
    *  Set arme
    * 
    * @return Arme
    */
    public setArme = (nb: number) => {
        if (nb === 1) {
            return new Hache();
        }
        else if (nb === 2) {
            return new Epee();
        }
        else
            return new Arme(3, 6, 5);
    }


}