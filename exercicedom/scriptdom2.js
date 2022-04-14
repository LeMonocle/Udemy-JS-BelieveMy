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

// LES ECOUTEURS VIA LES PROPRIETES JAVASCRIPT

    let a = document.getElementById("supprimer");
    let button = document.getElementById("passerDessus");

    //Méthode classique

        // a.onclick = function(){                              
        //     if(confirm("Etes-vous sûr ?")) {
        //         location.href="https://believemy.com";
        //     }
        // }

    //Avec fonctions fléchées

        a.onclick = () => {
            if(confirm("Etes-vous sûr ?")) {
                location.href="https://believemy.com";
            }
        }
        
        button.onmouseover = () => {
            document.body.style.backgroundColor = "green";
        }

        button.onmouseout = () => {
            document.body.style.backgroundColor = "white";
        }

// LES ECOUTEURS VIA LE GESTIONNAIRE D'EVENEMENTS

    let supprimerGestionnaire = document.getElementById("supprimerGestionnaire");
    let passerDessusGestionnaire = document.getElementById("passerDessusGestionnaire");

    supprimerGestionnaire.addEventListener("click", () => {
        if(confirm("Voulez-vous supprimer ?")){
            location.href="https://believemy.com";
        }
    });

    passerDessusGestionnaire.addEventListener("mouseover", () => {
        document.body.style.backgroundColor = "blue";
    });
    
    function policeGlory () {
        document.body.style.fontFamily = "glory";
    }

    passerDessusGestionnaire.addEventListener("mouseout", () => {
        document.body.style.backgroundColor = "white";
    });

    passerDessusGestionnaire.addEventListener("mouseout", policeGlory);

    //Supprimer des eventListener
    passerDessusGestionnaire.removeEventListener("mouseout", policeGlory);