// LES OBJETS

let chien = {
    race: "shiba",
    poil: "court",
    // aboyer: function () {
    //     console.log("Ouaf, ouaf !");
    // } 
    aboyer: () => console.log("Ouaf, ouaf")     //Pas de ';'
}

console.log(chien.race);
chien.aboyer();

let magicien = {
    attaquer: function(){
        console.log("Le magicien lance un sort.");
    }
}

let guerrier = {
    attaquer: function(){
        console.log("Le guerrier tire son épée.");
    }
}

magicien.attaquer();        //Fonction personnalisée à l'objet à laquelle elle est rattachée
guerrier.attaquer();

//L'AFFECTATION PAR DECOMPOSITION (DESTRUCTURING ASSIGNMENT)

console.log("---------- AFFECTATION PAR DECOMPOPSITION ----------");

let informations = ["SuperSayen", "25", "homme"];

// let pseudo = informations[0];       // permet de ne pas corrompre les premières données
// let age = informations[1];          // Methode sans décomposition... long !
// let genre = informations[2];

//Avec décomposition
let [pseudo, age, genre] = informations;

console.log(pseudo);
console.log(age);
console.log(genre);

// L'OBJET SET

console.log("---------- OBJET SET ----------");

let nombres = [10, 45, 75, 10, 24, 45];
let monSet = new Set(nombres);

console.log(monSet);        //Les valeurs en double ont été supprimées

let monSet2 = new Set();

monSet2.add("70");
monSet2.add(87);
monSet2.add(88);
monSet2.add(["titre", "auteur", "édition"]);

console.log(monSet2);

monSet2.delete(87);

console.log(monSet2);
console.log("J'ai " + monSet2.size + " éléments dans mon Set.");

// OBJET MAP            RELIE CLEF/VALEUR

console.log("---------- OBJET MAP ----------");

let monMap = new Map([
    ["prenom", "Mark"],
    ["Nom", "Zuckerberg"]
]);

console.log(monMap);

monMap.set("poste", "PDG de Facebook");         //AJOUTER
console.log(monMap);

monMap.delete("poste", "PDG de Facebook");      //SUPPRIMER
console.log(monMap);

    //sert pour des éléments complets !!!

    let utilisateurs = new Map();

    utilisateurs.set("Mark Zuckerberg",{
        email: "mark@facebook.com",
        poste: "PDG"
    });

    utilisateurs.set("Bill Gates", {
        email: "bill@gatesnote.com",
        poste: "Sauver le monde"
    })

    console.log(utilisateurs);

// OBJET WEAKSET -> Ne peut stocker que des objets

console.log("---------- OBJET WEAKSET ----------");

let voitureA = {
    constructeur: "Tesla",
    modele: "CyberTruck"
};

let voitureB = {
    constructeur: "Renault",
    modele: "Espace"
};

// let voitures = new WeakSet();

// voitures.add(voitureA);
// voitures.add(voitureB);

// On peut simplement écrire :
let voitures = new WeakSet([voitureA, voitureB]);

console.log(voitures);

voitures.delete(voitureA);

console.log(voitures);

// OBJET WEAKMAP -> Collection d'objet, comme weakset, mais avec une clé et une valeur

console.log("---------- OBJET WEAKMAP ----------");

let voitures2 = new WeakMap();

let index = {
    id: 1
};

let voitureC = {
    constructeur: "Tesla",
    modele: "CyberTruck"
};

voitures2.set(index, voitureC);
console.log(voitures2);

voitures2.delete(index);
console.log(voitures2);

// AJOUTER UN NOMBRE INFINI D'ARGUMENTS (REST parameter)

console.log("---------- REST PARAMETER ----------");

function additionRest(...nombres){
    let resultat = 0;
    nombres.forEach(nombre => {
        resultat += nombre; 
    });
    console.log("Le résultat total est " + resultat);
}

additionRest(4, 9, 5, 415, 78, 54);
additionRest(4, 56, 2);

// OPERATEUR DE DECOMPOSITION (Spread operator)

console.log("---------- SPREAD OPERATOR ----------");

    //Exemple 1 : fusionner plusieurs tableaux

    // let fruitSpread = ["fraise", "banane", "poire"];
    // let alimentSpread = ["chocolat", "sucre", "lait"];
    // let totalSpread = alimentSpread.concat(fruitSpread);     //Les deux tableaux se sont fusionnés
    
    let fruitSpread = ["fraise", "banane", "poire"];
    let alimentSpread = ["chocolat", "sucre", "lait", ...fruitSpread];

    console.log(alimentSpread);
    
    //Exemple 2 : découper une chaîne de caractères en plusieurs éléments

    let phrase = "Bonjour !";
    let phraseTableau = [...phrase];

    console.log(phraseTableau);     //Tous les caractères sont séparés
    console.log(phraseTableau.length);

    //Exemple 3 : sélectionner un élément, et stocker les autres dans une variable
    
    let devises = ["dollar", "euro", "yen"];
    // let premiereDevise = devises[0];
    // let autres = [1] + " " + [2];

    //Cela revient à écrire, plus simplement :
    let [premiereDevise, ...autres] = devises;

    console.log(premiereDevise);
    console.log(autres);
