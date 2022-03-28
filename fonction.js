//SANS PARAMETRE
function direBonjour() {
  let nom = prompt("Veuillez entrer votre nom");
  alert("Bonjour " + nom + " !");
}

//FONCTIONS EXISTANTES

function demanderAge() {
  let age = prompt("Entrez votre âge"); //JS a entré cette valeur en chaîne de caractère

  if (age < 18) {
    age = parseInt(age); //convertit chaîne de caractère en nombre ENTIER !!! (utiliser parseFloat sinon)
    alert("Bonjour, vous avez " + age + " ans. Vous êtes mineur.");
    alert("Bientôt vous aurez " + (age + 1) + " ans."); //Sans parseInt, il affiche 151 ans (si on entre 15)
  } else {
    age = Number(age); //Convertit aussi une chaîne de caractère en nombre (entier et à virgule)
    alert("Bonjour, vous avez " + age + " ans. Vous êtes majeur.");
    alert("Bientôt vous aurez " + (age + 1) + " ans."); //Sans parseInt, il affiche 151 ans (si on entre 15)
  }
}

//NOTA BENE !
//nombre = 45;
//nombreEnString = nombre + ""; (barbare)
//nombreEnString = nombre.toString (plus propre, fonction qui s'ajoute à la fin)

//EXERCICE 1

function abracadabra() {
  let prenom    = prompt("Quel est votre prénom ?");
  let nom       = prompt("Quel est votre nom ?");
  let age       = prompt("Quel est votre âge ?");

  alert(
    "Sapristi ! On ne m'avait pas prévenu que c'était vous, " 
    + prenom
    + " ! Euh... Je veux dire... Monsieur le grand magicien "
    + nom
    + " ! Cela fait déjà " 
    + age
    + " ans que vous faites rayonner notre contrée !"
  );
}

// EXERCICE 2 - CALCUL D'IMC

function demanderMensuration() {
    let poidsDemande = prompt("Quel est votre poids en kg ?");
    let tailleDemandee = prompt("Quelle est votre taille ? (en mètre)")
    let resultat = calculerIMC(poidsDemande, tailleDemandee);
    alert("Votre IMC est de  " + resultat + ".");
}

function calculerIMC(poids, taille) {
    return (poids / (taille**2))
    //taille**2 peut être aussi écrit avec "Math.pow(taille, 2)" (plus professionnel)
}

// PLUSIEURS CONDITIONS D'UN COUP (OR/AND)

function exerciceGare(){
    let gareDeDepart2 = "Rennes";
    let gareDArrivee2 = prompt("Où souhaitez-vous aller ?") || "Gare du Nord";  //Gare du Nord est entrée ici en destination par défaut, si l'utilisateur n'entre aucune donnée.
    let chauffeur2 = "Nicolas";
    
    if (gareDArrivee2 != "" || gareDeDepart2 != "" && chauffeur2 != "") {
        alert("Le train va démarrer à destination de " + gareDArrivee2 + " .")
    } else {
        alert("Le train ne peut pas démarrer.");
    }
}

//LEGUMES OU FRUITS

function fruitOuLegume() {
    let consommable = prompt("Entrez un ingrédient").toLowerCase();

switch (consommable) {
    case "carotte":
    case "courgette":   // On peut en mettre plusieurs à la suite, jusqu'au break !
    case "pomme de terre":
        alert("Ceci est un légume.");
        break;   // évite de lire tous les critères !

    case "banane":
    case "pomme":
    case "poire":
        alert("Ceci est un fruit.");
        break;

    default:
        alert("Ceci n'est pas enregistré.")
        // Pas besoin du break puisque c'est la fin
}
}

//DO - WHILE

function doWhile() {

  do {            //sera exécuté au moins une fois
      var prenom2 = prompt ("Quel est votre prénom ?"); // Prendre une variable globale
  } while(prenom2 == "" || prenom2 == null)    //se répète si condition s'ajoute

  alert("Bonjour " + prenom2);
}

// EXCEPTIONS

function exceptions() {
  try {
    //erreur ?
    let recompense = prompt("Choisissez une récompense : épée, arc, haches.");
    let degats;

    switch (recompense) {
        case "épée" :
            degats = 40;
            break;
        case "arc" :
            degats = 30;
            break;
        case "haches" :
            degats = 20;
            break;
        default:
            throw new Error("Vous ne pouvez pas tricher.");
    }

    alert("Vous avez choisi : " + recompense + " (" + degats + " dégats).")
  }
  catch (error){
      //erreur !!
      alert(error.message); //Affiche le message de l'erreur (on peut choisir d'autres options comme .stack ou .name)
  }
  finally {                 //S'exécute dans tous les cas
      alert("Fin du programme");
  }
}