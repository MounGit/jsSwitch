// - # Exo 1 Switch
//     - ## Stockez dans une variable, via un prompt, un jour de la semaine.

//     - ## À l'aide d'un switch, affichez ce que vous avez planifié de faire ce jour-ci. 
//         - ### Ex:  On est lundi. Tu as cours  à MolenGeek et tu as sport en soirée.

// let jour = prompt("donnez un jour de la semaine").toLowerCase();
// switch (jour) {
//     case "lundi":
//         alert("On est lundi dans 5 dodos c'est le weekend");
//         break;
//     case "mardi":
//         alert("On est mardi dans 4 dodos c'est le weekend");
//         break;
//     case "mercredi":
//         alert("On est mercredi dans 3 dodos c'est le weekend");
//         break;
//     case "jeudi":
//         alert("On est jeudi dans 2 dodos c'est le weekend, don't forget the geektalk");
//         break;
//     case "vendredi":
//         alert("On est vendredi dans 1 dodo c'est le weekend!")
//     default:
//         alert("weeeeeeeeeeeeeeeekeeeeeeeeeennnnd!!!")
//         break;
// };

// - # Exo 2 Switch
//     - ## Déclarer une variable qui prendra comme valeur un prompt qui retourne un type de météo (pluie, soleil, neige, nuages, orages)

//     - ## À l'aide d'un switch, affichez une réaction appropriée au temps
//         - ### Ex: Il pleut. Je prend un parapluie

// let meteo = prompt("Quel temps fait-il aujourd'hui?").toLowerCase();
// switch (meteo) {
//     case "il pleut":
//         alert("Il pleut, reste dans ton lit");
//         break;
//     case "il neige":
//         alert("Il neige, reste dans ton lit");
//         break;
//     case "il fait beau":
//         alert("Il fait beau, reste dans ton lit c'est un leurre, il fait -2");
//         break;
//     case "il fait nuageux":
//         alert("Il fait nuageux, reste dans ton lit");
//         break;
//     default:
//         alert("ok, reste dans ton lit, c'est plus prudent");
//         break;
// };

// - # Exo 3 Switch
//     - ### Déclarez trois variables que l'utilisateur remplira : nbr1 / operateur(+-/*) / nbr2;

//     - ###  Faite switch qui en fonction de l'opérateur donné, effectuera le calcul avec cet opérateur et afficher le résultat.

//         - ### Ex:nbr1 = 1 | operateur = "+" | nbr2 = 3  => affichera 4

let nbr1 = parseInt(prompt("Inscrivez un nombre"));
let op = prompt("Inscrivez un opérateur");
let nbr2 = parseInt(prompt("Inscrivez un nombre"));


switch (op){
    case "+":
        // let calc1 = nbr1 + nbr2;
        alert(nbr1+nbr2);
        break;
    case "-":
        let calc2 = nbr1 - nbr2;
        alert(calc2);
        break;
    case "*":
        let calc3 = nbr1 * nbr2;
        alert(calc3);
        break;
    case "/":
        let calc4 = nbr1 / nbr2;
        alert(calc4);
        break;
    default:
        alert("Ceci n'est pas un opérateur");
        break;
}