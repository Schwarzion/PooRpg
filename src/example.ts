// class Voiture {
//     //Variables d'instance
//     private _marque : string;
//     private _couleur: string;

//     //Variables de classe
//     private static _nbVoiture: number;

//     contrustor(marque="", couleur="")
//     {
//         this._marque = marque;
//         this._couleur = couleur;
//         Voiture._nbVoiture += 1; 
//     }

//     //Getters
//     get marque()
//     {
//         return this._marque;
//     }

//     set marque(marque: string)
//     {
//         this._marque = marque;
//     }

//     get couleur()
//     {
//         return this._couleur;
//     }

//     set couleur(couleur: string)
//     {
//         this._couleur = couleur;
//     }

//     //Méthodes d'intance
//     rouler = (vitesse: number) => {
//         console.log(`Je roule à ${vitesse} km/h`);
//     }
// }

// class VoitureDeSport extends Voiture {
//     private _superVitesse: number;

//     constructor(marque = "", couleur= "", superVitesse = 400) {
//         super(marque, couleur);
//         this._superVitesse = superVitesse;
//     }
// }

// class Humain {
//     // encapsulation : des variables d'instance en visibilité privé
//     private _taille: number;
//     private _age: number;

//     // encapsulation : getters/setters
//     public get taille(): number {
//         return this._taille
//     }

//     public set taille(taille: number) {
//         this._taille = taille
//     }

//     public get age(): number {
//         return this._age
//     }

//     public set age(age: number) {
//         if (age >= 0) {
//             this._age = age
//         }
//     }

//     constructor(taille = 0, age = 0) {
//         this._taille = taille
//         this._age = age
//     }

//     public manger = () => {
//         console.log("miam miam")
//     }


// }

// class Dev extends Humain implements IMangeur {
//     private _languages: string[]

//     constructor(taille = 0, age = 0, languages = []) {
//         super(taille, age);
//         this._languages = languages
//     }

//     public get languages(): string[] {
//         return this._languages
//     }

//     public set languages(languages: string[]) {
//         this._languages = languages
//     }

//     public coder = () => {
//         console.log("le php c'est trop nul")
//     }

//     public manger = () => {
//         console.log('glou glou')
//     }
// }
// ///
// let humain: Humain = new Humain() // instance d'humain pour une variable de type Humain
// humain.age = 12;
// humain.taille = 142
// humain.manger()

// let dev: Dev = new Dev() //instance de dev pour une variable de type Dev
// dev.age = 18;
// dev.taille = 169;
// dev.manger()
// dev.languages = ["python", "javascript", "windev"]
// dev.coder()

// let dev2: Humain = new Dev(); // instance de dev pour une variable de type Humain
// dev2.age = 13;
// dev2.taille = 178;
// dev2.manger()
// let dev22 = dev2 as Dev;
// dev22.coder()
// dev22.languages = ["php"]


// interface IMangeur {
//     manger(): void
// }

// class Chien implements IMangeur {
//     manger = () => {
//         console.log('waf')
//     }

//     manger = (aliment: string) => {
//         console.log(aliment)
//     }
// }

// let dev3: IMangeur = new Dev();
// let chien: IMangeur = new Chien();
