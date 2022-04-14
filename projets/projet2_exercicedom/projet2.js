document.getElementById("a-supprimer").remove();

let monHeader = document.createElement("header");
    monHeader.textContent = "Bienvenue";
    monHeader.style.margin = "auto";
    monHeader.style.display = "flex";
    monHeader.style.justifyContent = "center";
    monHeader.style.alignItems = "center";
    monHeader.style.backgroundColor = "#e3b04b";
    monHeader.style.height = "150px";
    monHeader.style.width = "100%";
    monHeader.style.fontSize = "60px";
    monHeader.style.fontFamily = "Arial";
    monHeader.style.color = "white";
document.body.append(monHeader);

let sousHeader = document.createElement("header");
    sousHeader.innerHTML = "<a href='#'>Accueil</a> / <a href='#'>Une autre page</a>"
    sousHeader.style.height = "40px";
    sousHeader.style.backgroundColor = "#f1d6ab";
    sousHeader.style.fontFamily = "Arial";
    sousHeader.style.display = "flex";
    sousHeader.style.alignItems = "center";

document.body.append(sousHeader);

let paragraphe = document.createElement("p");
    paragraphe.textContent = "Ceci est un paragraphe crée avec JavaScript !";
    paragraphe.style.fontFamily = "Arial";
document.body.append(paragraphe);
