let header      = document.getElementsByTagName("header");
let logo        = document.getElementById("logo");
let container   = document.getElementsByClassName("container");
let h1          = document.querySelector("h1");                     //Recherche en général (on ajoute "#" ou "." si besoin pour les Id et Class)
let p           = document.querySelectorAll("p");                   //Cherche tous les paragraphes

console.log(container);
console.log(logo);
console.log(header);
console.log(h1);
console.log(p);

h1.textContent = "Hello World";             //Réécrit le texte (propriété)
h1.innerHTML = "<div style='font-weight: normal'> Hello World again ! </div>"    //On change l'HTML directement

p[0].textContent = "Coucou tout le monde, le premier paragraphe a changé !";    //On modifie ici le premier élément "p" (tous les "p" ont été rassemblés dans un tableau, on choisit l'élément par son index)

// AJOUTER DES ELEMENTS AU DOM

    //1ère méthode : juste écrire un texte
    document.write("Test de texte supplémentaire");

    //2ème méthode : ajouter un élément brut
    document.body.append(" test");

    //3ème méthode : celle pour les objets
        //Créer un élément
        //Le personnaliser
        //L'ajouter à la page
    let helloWorld = document.createElement("div");
    helloWorld.textContent = "Hello World bis !";
    document.body.append(helloWorld);               //AppendChild ne fonctionne qu'avec des objets, on ne peut pas ajouter des strings

    document.querySelector(".container").prepend(helloWorld);       //On place avant le container. On peut utiliser insertBefore également, mais ici plus simple

    //On peut aussi tout résumer :
    //let ajout = document.createElement("div").textContent("Coucou les gens, c'est bien résumé ");

//SUPPRIMER UN ELEMENT DU DOM

document.querySelector("h1").remove();

