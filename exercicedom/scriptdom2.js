//MODIFIER LE STYLE

//Prmeière méthode
let header = document.querySelector("header");
header.style.backgroundColor = "#ffbd69";        //NB : on l'a trouvé byTagName

//Deuxième méthode
document.querySelector("h1").style.color = "#111D5E";       //Le soucis ici, c'est qu'il va falloir appeler a chaque fois le querySelector
document.querySelector("h1").style.textAlign = "center";

//Troisième méthode : avec une classe
function changerClasse() {
    document.querySelector("header").className = "ma_class";
}
