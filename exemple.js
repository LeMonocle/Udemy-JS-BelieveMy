let prenom  = "Nicolas";
let nom     = "Charrière-Duthoit";

console.log("Bonjour " + prenom + " " + nom + " !");

//OPERATIONS 

let nombreUn = 8, nombreDeux = 4, result;
result = nombreUn + nombreDeux; //12

result += 2; // correspond à "result = result + 2;"
result ++; //on ajoute 1 (incrémentation)

console.log(nombreUn + " et " + nombreDeux + " et le result est " + result)

//FONCTIONS ET PARAMETRES

function direBonjour(prenom) {
    console.log("Bonjour " + prenom);
}
direBonjour("Nicolas");

//VARAIBLES GLOBALES

let cri1 = "Toujours plus haut !"; // variable globale

function criDeGuerre() {
    let cri2 = "Moooontjoie Saint Denis !!"; //variable locale, accessible suelement dans cette fonction
    cri1 = "A l'assauuut !" //On modifie la variable globale dans la fonction, mais peu recommandé
    console.log(cri2);
}

console.log(cri1);
criDeGuerre();
console.log(cri1); //cri1 a été modifié après la fonction !

//FONCTIONS QUI RETOURNENT QUELQUE CHOSE

let premierNombre = 4, deuxiemeNombre = 7;

function addition2(nombreA, nombreB) {
    let result = nombreA + nombreB;
    return result; //arrête la fonction
    console.log("test"); //Ne s'affichera pas à cause du return
    // console.log(result) // affiche quelque chose
}

function division2(nombreA, nombreB) {
    let result = nombreA / nombreB;
    return result;
}

console.log(addition2(premierNombre, deuxiemeNombre));
console.log(addition2(premierNombre, deuxiemeNombre));

//On peut créer des calculs plus complexes, mais plus lisibles
let resultatAddition = addition2(premierNombre, deuxiemeNombre);
let resultatDivision = division2(premierNombre, deuxiemeNombre);
console.log(resultatAddition * resultatDivision);

//PARAMETRES PAR DEFAUT
let nombreTest = 4;


function addition(nombreA, nombreB = 10) { //nombreB est un paramètre par défaut
    let result = nombreA + nombreB;
    return result;
}

console.log("Addition des nombres : " + addition(nombreTest));

let preparation = 10, cuisson = 15;

function cuisiner(nombreDeGateaux, minutesDePreparation = preparation, minutesDeCuisson = cuisson) {
    let resultat = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation);
    return resultat;
}

let tempsDePreparationChocolat = cuisiner(4);
let tempsDePreparationFraisier = cuisiner(1, 20); //On change un des paramètres par défaut

console.log("Temps de préparation fraisier : " + tempsDePreparationFraisier);

console.log("Temps de préparation total : " + tempsDePreparationChocolat + tempsDePreparationFraisier);

// FONCTIONS ANONYMES (utiles pour les objets)

let fonctionAnonyme = function(){
    console.log("Je suis une fonction anonyme");
}
fonctionAnonyme();

(function() {console.log("Je suis une autre fonction anonyme") })(); //Exécutée automatiquement, plus rapide !! Ne pas oublier les parenthèses, pas de ";", couple de parenthèses à la fin.

//TEST SUR LA PORTEE DES VARIABLES

let variableLet = "globale";
var variableVar = "globale";

if(true){

    let variableLet = "locale";
    var variableVar = "locale";

    console.log("let L : " + variableLet);
    console.log("var L : " + variableVar);

}

console.log("let G : " + variableLet);
console.log("var G : " + variableVar);

// BOUCLES RECURSIVES

function timer(secondes){

    if(secondes > 0){
        console.log(secondes);
        timer(secondes - 1);
    }
    else {
        console.log(secondes);
    }

}

timer(10);