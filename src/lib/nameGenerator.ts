export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function generateName() {
    var name1 = ["Billy", "Bobby", "Kenny", "Helmut", "Chris", "Peter", "Carl"];

    var name2 = ["La Terreur", "Le Guetteur", "La Fouine", "Les Doigts Crochus", "Bottleneck", "Dinguo", "Martinez"];

    var name = capitalizeFirstLetter(name1[getRandomInt(0, name1.length - 1)]) + ' ' + capitalizeFirstLetter(name2[getRandomInt(0, name2.length - 1)]);
    return name;
}