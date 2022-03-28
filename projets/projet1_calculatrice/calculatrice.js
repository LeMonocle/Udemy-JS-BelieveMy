function calculatrice() {
    // FONCTIONS

    function addition(premierNombre, deuxiemeNombre){
        return premierNombre + deuxiemeNombre;
    }

    function multiplication(premierNombre, deuxiemeNombre){
        return premierNombre * deuxiemeNombre;
    }

    function soustraction(premierNombre, deuxiemeNombre){
        return premierNombre - deuxiemeNombre;
    }

    function division(premierNombre, deuxiemeNombre){
            return premierNombre / deuxiemeNombre;
    }

    let recommencer = false;

    // ENTREE DES DONNEES
    do {
        do {
            var choix = prompt("Quel calcul souhaitez-vous effectuer ? \n\n 1 - Addition \n 2 - Multiplication \n 3 - Soustraction \n 4 - Division \n");
        } while (choix != 1 && choix != 2 && choix != 3 && choix !=4)
    
        do {
            var nombreUn = Number(prompt("Quel est votre premier nombre ?"));
            var nombreDeux = Number(prompt("Quel est votre deuxième nombre ?"));
        } while (isNaN(nombreUn) || isNaN(nombreDeux))
    
        //CALCULS
    
        let resultat;
        try {
            switch (choix) {
                case "1":
                    resultat = addition(nombreUn, nombreDeux);
                    break;
                case "2":
                    resultat = multiplication(nombreUn, nombreDeux);
                    break;
                case "3":
                    resultat = soustraction(nombreUn, nombreDeux);
                    break;
                case "4":
                    if(nombreDeux == 0){
                        throw new Error("Vous ne pouvez pas diviser par 0.");
                    } else {
                    resultat = division(nombreUn, nombreDeux);
                    }
                    break
                default:
                    throw new Error("Une erreur est survenue.");
            }
            alert("Voici votre resultat : " + resultat); // S'excécute si ucune erreur
        }
        catch(error) {
            alert(error);
        }

        recommencer = confirm("Voulez-vous recommencer ?");

    } while (recommencer)
    
}