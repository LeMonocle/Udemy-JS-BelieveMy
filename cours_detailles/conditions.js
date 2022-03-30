// LES CONDITIONS SWITCH

let consommable = "chocolat";

switch (consommable) {
    case "carotte":
    case "courgette":   // On peut en mettre plusieurs à la suite, jusqu'au break !
    case "pomme de terre":
        console.log("Ceci est un légume.");
        break;   // évite de lire tous les critères !

    case "banane":
    case "pomme":
    case "poire":
        console.log("Ceci est un fruit.");
        break;

    default:
        console.log("Ceci n'est pas enregistré.")
        // Pas besoin du break puisque c'est la fin
}


// PLUSIEURS CONDITIONS D'UN COUP (OR/AND)

let gareDeDepart = "Rennes";
let gareDArrivee = "Montparnasse"; // Si on ne veut rien mettre, écrire : let gareDArrivee = "";

if (gareDArrivee != "" && gareDeDepart != "") {
    console.log("Le train va démarrer.")
} else if (gareDArrivee != "" ||  gareDeDepart != ""){
    console.log("Il manque une gare.");
} else {
    console.log("Le train ne peut pas démarrer.");
}

// CONDITIONS TERNAIRES

let x = 1;

// if (x > 3){
//     console.log("X est supérieur à trois.")
// } else {
//     console.log("X est inférieur à trois.")
// }                                                Ce code peut être écrit autrement...

//[CONDITION] ? [TRUE] : [FALSE];                   Pas besoin des []
x > 3 ? console.log("X est supérieur à trois.") : console.log("X est inférieur à trois.");

// LES BOUCLES

let i = 1;

while (i <= 10) {
    
    if(i == 3){
        i++;    //Ne pas oublier d'incrémenter ! Sinon boucle infinie !
        console.log("Adieu la ligne 3 !");
        continue;
    }

    if(i == 8){
        break;  //On arrêt la boucle ici
    }

    console.log("Ligne " + i);
    i++;
}

// BOUCLE FOR

for (let j = 1; j <= 5; j++) {
    console.log("Jigne " + j);
}

