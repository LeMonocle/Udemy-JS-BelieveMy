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

//VARIABLES GLOBALES

console.log("---------- VARIABLES GLOBALES - CRIS DE GUERRE ----------");

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

console.log("---------- FONCTIONS ET RETURN ----------");

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

console.log("---------- TEMPS DE PREPARATION ET CUISSON ----------");

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

console.log("---------- PORTEE DES VARIABLES ----------");

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

console.log("---------- BOUCLES RECURSIVES ----------");

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

//FONCTIONS FLECHEES

console.log("---------- FONCTIONS FLECHEES ----------");

let maFonction1 = function(){         //Fonction anonyme (avant)
    console.log("test fonction anonyme 1");
}

maFonction1();

//Nouvelle syntaxe pour les fonctions anonymes et petites fonctions. Si un seul paramètre, pas besoin de parenthèses, couple de parenthèses vides si aucun paramètre !
let maFonctionFlechee = (parametre, autreParametre) => {       
    console.log("test fonction fléchée")
}
maFonctionFlechee();

//On peut tout mettre sur une seule ligne
let maFonctionFlechee2 = () => console.log("Fonction fléchée plus courte");

maFonctionFlechee2();

// lES FERMETURES (CLOSURE)

console.log("---------- FERMETURES (CLOSURES) ----------");

//Désigne une fonction dans une fonction

function saluer(prenom3) {
    let salutation = "Bonjour " + prenom3;  //Variable locale
    let maClosure = () => console.log(salutation);      //Permet de sauvegarder une variable locale dans une fonction
    return maClosure;
}

let fonctionNicolas = saluer("Nicolas");
fonctionNicolas();

function timerClosure(){
    let secondes = 0;
    let maClosureTimer = () => {
        return ++secondes;
    }
    return maClosureTimer;
}

let monTimerClosure = timerClosure();
console.log(monTimerClosure());     //Renvoie 1
console.log(monTimerClosure());     //Renvoie 2 (il a sauvegardé la variable secondes dans la closure)
console.log(monTimerClosure());     //Renvoie 3

let monDeuxièmeTimer = timerClosure();
console.log(monDeuxièmeTimer());    //Réinitialise le timer dans une nouvelle fonction -> Renvoie 1

console.log(monTimerClosure());     //Le premier timer n'est pas réinitialisé -> Renvoie 4
