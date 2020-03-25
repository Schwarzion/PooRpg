import { Arme, Hache, Epee } from "./Arme";
import { generateName } from '../lib/nameGenerator'
export class Personnage {

    private _nom: string;
    private _pv: number;
    private _pvMax: number;
    private _defense: number;
    private _arme: Arme;

    constructor(nom: any, pv: number, pvMax: number, defense = 0, arme: Arme) {
        this._nom = nom;
        this._pv = pv;
        this._pvMax = pvMax;
        this._defense = defense;
        this._arme = arme;
    }

    public attack = (cible: Personnage) => {
        let dmg = this._arme.getDmg();
        if (this._arme.constructor === Arme) {
            console.log(`${this._nom} attaque ${cible.getNom()}\nMontant des dégats : ${dmg}`);
        }
        else
            console.log(`${this._nom} attaque ${cible.getNom()} avec ${this._arme.constructor.name}\nMontant des dégats : ${dmg}`);

        cible.getAttacked(cible, dmg);
    }

    public getAttacked = (cible: Personnage, dmg: number) => {
        cible._pv -= dmg;
        console.log(`Point de vie de ${cible.getNom()} : ${cible.getPv()}\n`);
    }

    public isKilled = () => {
        if (this._pv <= 0) {
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
        if (this._pv < 0)
            return 0;
        else
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

    /**
    *  get arme
    * 
    * @return Arme
    */
    public getArme = () => {
        return this._arme;
    }

    //Setters

    /**
     * set name
     * 
     * @return void
     */
    public setNom = (nom: string) => {
        this._nom = nom;
    }

    /**
     * set actual health point
     * 
     * @return void
     */
    public setPv = (pv: number) => {
        this._pvMax = pv;
    }

    /**
    * set max health point
    * 
    * @return void
    */
    public setPvMax = (pvMax: number) => {
        this._pvMax = pvMax;
    }

    /**
    * set defense point
    * 
    * @return void
    */
    public setDefense = (defense: number) => {
        this._defense = defense;
    }

    /**
    *  Set arme
    * 
    * @return void
    */
    public setArme = (arme: Arme) => {
        this._arme = arme;
    }
}


export class Gentil extends Personnage {

    constructor(nom: string, arme: Arme) {
        super(nom, 30, 30, 0, arme);
    }
}

export class Mechant extends Personnage {

    constructor(arme: Arme)
    {
        let nom = generateName();
        super(nom, 40, 40, 0, arme);
    }
}