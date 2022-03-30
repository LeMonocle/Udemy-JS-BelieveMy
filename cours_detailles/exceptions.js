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
    alert(error.message); //Affiche le message de l'erreur
}
finally { //S'exécute dans tous les cas
    alert("Fin du programme");
}