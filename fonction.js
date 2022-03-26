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