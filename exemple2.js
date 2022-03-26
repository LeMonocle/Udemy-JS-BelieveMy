//PARAMETRES PAR DEFAUT
let nombreUn = 4;


function addition(nombreA, nombreB = 10) { //nombreB est un paramètre par défaut
    let result = nombreA + nombreB;
    return result;
}

console.log(addition(nombreUn));

let preparation = 10, cuisson = 15;

function cuisiner(nombreDeGateaux, minutesDePreparation = preparation, minutesDeCuisson = cuisson) {
    let resultat = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation);
    return resultat;
}

let tempsDePreparationChocolat = cuisiner(4);
let tempsDePreparationFraisier = cuisiner(1, 20); //On change un des paramètres par défaut

console.log(tempsDePreparationFraisier);

console.log(tempsDePreparationChocolat + tempsDePreparationFraisier);

// FONCTIONS ANONYMES (utiles pour les objets)

let fonctionAnonyme = function(){
    console.log("Je suis une fonction anonyme");
}
fonctionAnonyme();

(function() {console.log("Je suis une autre fonction anonyme") })(); //Exécutée automatiquement, plus rapide !! Ne pas oublier les parenthèses, pas de ";", couple de parenthèses à la fin.