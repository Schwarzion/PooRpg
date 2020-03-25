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
        // réponse de la question
        let response;

        // création de l'outil pour gérer les entrées et sorties consoles
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        // je génère la question en asynchrone que je await
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
        let nb = Number(await this.readLine('Quel arme lui attribuer [1 => Hache /2 => Epee]? '));
        if (nb === 1) {
            return new Hache();
        }
        else if (nb === 2) {
            return new Epee();
        }
        else this.selectArme();
    }

    public getName = async (question: string) => {
        let name = await this.readLine(question);
        return name;
        //Verif nom en double
        //If name already exist
        //this.getName('Nom déjà utilisé');
        //else

    }

    public addPlayers = async () => {
        let test: any = await this.readLine('Ajouter un personnage [y/n]? ');
        if (test === 'n') {
            this.startGame();
        }
        if (test != 'n' && test === 'y') {
            let name: any = await this.getName('Quel nom lui donner? ');
            let arme: Arme = await this.selectArme() as Arme;
            let player: Gentil = new Gentil(name.toString(), arme);
            this.addToEquipeGentils(player);
            this.addPlayers();
        }
        else if (test != 'n' && test != 'y')
            this.addPlayers();
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

    public getGentilsTab = () => {
        return this._equipeGentils;
    }

    public getMechantsTab = () => {
        return this._equipeMechants;
    }
}