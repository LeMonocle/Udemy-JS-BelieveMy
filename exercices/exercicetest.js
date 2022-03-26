function voyager(nombreAdultes = 0, nombreEnfants = 0, classe = "Economique") {
    let montant = 0;
 
    if(classe == "Economique") {
        montant = (nombreAdultes * 450) + (nombreEnfants * 100);
    }
    else if(classe == "Business") {
        montant = (nombreAdultes * 950) + (nombreEnfants * 400);
    }
    else {
        montant = (nombreAdultes * 1450) + (nombreEnfants * 1000);
    }
 
    console.log('Bonjour ! Bienvenue à bord. Voici le montant à payer : ' + montant + ' euros.');
}
 
voyager(2, 1, "Premiere");