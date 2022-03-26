//SANS PARAMETRE
function direBonjour() {
    let nom = prompt("Veuillez entrer votre nom")
    alert("Bonjour " + nom + " !");
}

direBonjour();

//FONCTIONS EXISTANTES

function demanderAge() {
    let age = prompt("Entrez votre âge"); //JS a entré cette valeur en chaîne de caractère
    
    if(age < 18){
        age = parseInt(age); //convertit chaîne de caractère en nombre ENTIER !!! (utiliser parseFloat sinon)
        alert("Bonjour, vous avez " + age + " ans. Vous êtes mineur.");
        alert ("Bientôt vous aurez " + (age + 1) + " ans.") //Sans parseInt, il affiche 151 ans (si on entre 15)
    } else {
        age = Number(age); //Convertit aussi une chaîne de caractère en nombre (entier et à virgule)
        alert("Bonjour, vous avez " + age + " ans. Vous êtes majeur.");
        alert ("Bientôt vous aurez " + (age + 1) + " ans.") //Sans parseInt, il affiche 151 ans (si on entre 15)
    }
}

demanderAge();

//NOTA BENE !
//nombre = 45;
//nombreEnString = nombre + ""; (barbare)
//nombreEnString = nombre.toString (plus propre, fonction qui s'ajoute à la fin)