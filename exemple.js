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