//BOITES DE DIALOGUE

alert("Hello World");


if(confirm("Etes-vous sûr de voir la page ?")){
    //oui
    alert("OK");
} else {
    //non
    alert("Annulation, mais vous la verrez quand-même");
}

// DEMANDER DES INFORMATIONS

const age = prompt("Entrez votre âge");

alert("Bonjour, vous avez " + age + " ans.");
if(age < 18){
    alert("Vous êtes mineur.");
} else {
    alert("Vous êtes majeur.");
}