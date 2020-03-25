import { Arme, Hache, Epee } from "../models/Arme";
import { TourService } from './Tour.service';
import { Personnage, Gentil, Mechant } from "../models/Personnage";
import readline from 'readline'
export class PartieService {

    private _equipeGentils: Personnage[];
    private _equipeMechants: Personnage[];

    constructor(equipeMechants = [], equipeGentils = []) {
        this._equipeGentils = equipeGentils;
        this._equipeMechants = equipeMechants;
    }

    private readLine = async (question: string) => {
        let response;
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        await new Promise((resolve, reject) => {
            rl.question(question, (answer: string) => {
                resolve(answer)
            })
        }).then(onfull => {
            response = onfull;
            rl.close()
        })
        return response
    }

    public startGame = () => {
        if (this._equipeGentils.length > 0) {
            console.log(`\nEquipe des Gentils :`);
            for (let gentil of this._equipeGentils) {
                console.log(gentil.getNom());
            }
            console.log(`\nEquipe des Méchants :`);
            for (let mechant of this._equipeMechants) {
                console.log(mechant.getNom());
            }
            this.initTour();
        }
        else
            console.log("Pas de personnage\nFin de partie");
    }

    public selectArme = async () => {
        let nb = await this.readLine('Quel arme lui attribuer [1 => Hache /2 => Epee]? ');
        if (nb === 1) {
            return new Hache();
        }
        else if (nb === 2) {
            return new Epee();
        }
        else this.selectArme();
    }

    public getName = async () => {
        let name = await this.readLine('Quel nom lui donner? ');
        return name;
    }

    public addPlayers = async () => {
        while (await this.readLine('Ajouter un personnage [y/n]? ') != 'n') {
            let name: any = await this.getName();
            let arme: any = await this.selectArme();
            let player: Gentil = new Gentil(name.toString(), arme);
            this.addToEquipeGentils(player);
        }
    }

    private addToEquipeGentils = (player: Personnage) => {
        this._equipeGentils.push(player);
        this._equipeMechants.push(new Mechant(new Arme(3, 6, 5)));
    }

    public getGentilsLengh = () => {
        return this._equipeGentils.length
    }

    public getMechantsLengh = () => {
        return this._equipeMechants.length
    }

    private initTour = () => {
        let tour = new TourService(this);
    }
}