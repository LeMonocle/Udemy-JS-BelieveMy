// LES TABLEAUX

    // TYPES DE TABLEAUX

        // Tableaux simples

            // Avant uon utilisait cette écriture
            let monTableau1 = new Array("un", "deux", "trois");
            let monTableau2 = Array("quatre", "cinq", "six");


            //Maintenant on écrit comme cela :
            let monTableau3 = ["sept", "huit", "neuf"];

        // Tableaux en 2 dimensions

        let ancienTableau2D = new Array(
            Array("Mark", "Jeff", "Bill"),
            Array("Zuckerberg", "Bezos", "Gates")
        );

        let monTableau2D = [
            ["Mark", "Jeff", "Bill"],
            ["Zuckerberg", "Bezos", "Gates"]
        ];

        // Tableaux associatif

        let tableauAssociatif = {               //On associe un nom aux éléments
            "prenom" : "Mark",
            "nom" : "Zuckerberg",
            "poste" : "PDG de Facebook"
        };

    // ACCEDER AUX ELEMENTS D'UN TABLEAU

        // Une seule dimension
        console.log(monTableau1[0]);

        // Tableau 2D
        console.log(monTableau2D[0][0]);        //Affiche du premier tableau [0], le premier élément [0] => "Mark"
        console.log(monTableau2D[1][2]);        //Affiche du deuxième tableau [1], le troisième élément [2] => "Gates"

        // Tableau associatif
        console.log("Le poste est " + tableauAssociatif["poste"] + ".");

        // Connaître le dernier élément
        console.log("Mon troisième tableau contient " + monTableau3.length + " éléments.");
        console.log("Le dernier élément est " + monTableau3[monTableau3.length - 1] + ".");

    // AJOUTER DES ELEMENTS

    monTableau3.push("dix");        //Ajoute à la fin
    monTableau3.unshift("six");     //Ajoute au début
    console.log(monTableau3);

    monTableau2D[0].push("test");
    monTableau2D[0].unshift("Retest");
    console.log(monTableau2D[0]);

    tableauAssociatif["nationalite"] = "Américaine";
    console.log(tableauAssociatif);
    
    // SUPPRIMER DES ELEMENTS -> aTTENTION, cet effet peut changer les index

    monTableau3.pop();              //Supprime à la fin
    console.log(monTableau3);
    monTableau3.shift();            //Supprime au début
    console.log(monTableau3);

    monTableau2D[0].pop();          // /!\ monTableau2D.pop(); -> Supprime une dimension
    console.log(monTableau2D[0]);
    monTableau2D[0].shift();
    console.log(monTableau2D[0]);

    delete(tableauAssociatif.poste);    //Zuckerberg se fait virer
    console.log(tableauAssociatif);

    //RETROUVER UN ELEMENT GRACE A SA VALEUR (ne fonctionne qu'avec des tableaux simples)

    console.log(monTableau3.indexOf("sept"));

    //CONCATENER POUR AFFICHER

    console.log(monTableau3.join(", "));    //Transforme mon tableau en chaîne de caractère. On précise la façon de séparer dans les parenthèses.
    console.log(monTableau3.join(" / "));   //On peu modifier la façon de séparer.

    console.log(monTableau2D.join(" / "));  //Sépare les deux dimensions.

    //FONCTION POUR AJOUTER, SUPPRIMER, ET REMPLACER DES ELEMENTS (simples et en 2D)

    monTableau3.splice(0, 2, "random", "pie");       //Supprime 2 éléments à partir de l'index [0], puis on ajoute "ramdom" et "pie" (se place devant l'index)
    console.log(monTableau3);

    monTableau2D[0].splice(0,0);
    console.log(monTableau2D[0]);

    //Exercice
    monTableau2D.splice(2, 0, ["30", "45", "70"]);  //On ajoute une autre dimension au tableau2D
    console.log(monTableau2D);
    console.log(monTableau2D[2]);
