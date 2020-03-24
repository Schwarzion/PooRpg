export class Arme {
    private _minDmg: number;
    private _maxDmg: number;
    private _criticChance: number;

    constructor(minDmg: number, maxDmg: number, criticChance: number) {
        this._minDmg = minDmg;
        this._maxDmg = maxDmg;
        this._criticChance = criticChance;
    }

    /**
    * Get Damage by egenrating random number between interval
    * 
    * @return number
    */
    public getDmg = () => {
        //Random number generation between minDmg and maxDmg
        if (this.isCriticalHit()) {
            return (this._maxDmg + 1);
        }
        else
            return (Math.floor(Math.random() * (this._maxDmg - (this._minDmg - 1))) + this._minDmg);
    }

    private isCriticalHit = () => {
        //Random number generation between 0 and 100 
        let nb: number = Math.floor(Math.random() * 100) - 1;
        //If number generated is lower or equal to criticChance, return true
        if (nb <= this._criticChance) {
            console.log('Critical Hit!');
            return true;
        }
        //If not, return false
        else
            return false
    }
}

export class Hache extends Arme {
    constructor(minDmg = 4, maxDmg = 8, criticChance = 10) {
        super(minDmg, maxDmg, criticChance)
    }
}
export class Epee extends Arme {
    constructor(minDmg = 4, maxDmg = 10, criticChance = 5) {
        super(minDmg, maxDmg, criticChance)
    }
}