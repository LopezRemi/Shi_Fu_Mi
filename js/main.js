
var nickName = false

//boucle utilisé pour le choix du prénom
while (nickName == false) {
        firstname = prompt("Quel est votre prénom ?");

    if  (firstname.length < 15 && firstname.length != null && firstname.length > 2 ) {
        alert("Merci "+ firstname + " préparez vous à jouer contre la RNG ! ");
       nickName = true
    }
    else if (firstname.length <= 2  && firstname.length != null) {
        alert("Prénom trop court");
    }
    else if (firstname.length > 15) {
        alert("Prénom trop long");
    }    
    else { 
        alert("Veuillez entrer un prénom");
    }    
}

main()
function main() {

//fonction utilisé pour déterminer le choix du joueur interdir les autres réponses et tolerer les entrées en Majuscules

var playerMove = prompt("Choisissez pierre, feuille, ou ciseaux ?");
function askPlayer () {
    playerMove = prompt("Jouer seulement pierre, feuille, ou ciseaux.");
}

function notGoodEntry (){
    while (playerMove.toLowerCase() !== "pierre" && playerMove.toLowerCase() !== "feuille" && playerMove.toLowerCase() !== "ciseaux"){
        alert(playerMove + " Ceci n'est pas valide");
        askPlayer();
    }
}
notGoodEntry();


var compMove = Math.random();
if (compMove < 0.33) {
compMove = "pierre";
}  else if(compMove <= 0.66) {
compMove = "feuille";
   }   else {
compMove = "ciseaux";
       };

//statement pour comparer les résultats du joueur et de l'ordinateur 
if (playerMove.toLowerCase() === compMove){
        alert("égalité !")
}   
    else if (playerMove.toLowerCase() === "pierre" && compMove === "ciseaux" || playerMove.toLowerCase() === "feuille" && compMove === "pierre" ||
    playerMove.toLowerCase() === "ciseaux" && compMove === "feuille"){
        alert("l'ordinateur a joué " + compMove + " vous avez gagné ! " + firstname)
    }
        else {
            alert ("l'ordinateur a joué " + compMove + " vous avez perdu " + firstname + " :'(")
        };

do {
    var playAgain = prompt("voulez vous rejouer 'oui ou 'non'  ?")
} while (!["oui", "non"].includes(playAgain)); {

    if (playAgain === "oui") {
        main()  //rapelle de la fonction main pour relancer le jeu.
    }
        else {
        alert ("Merci d'avoir joué " + firstname + " =)")
        }
  }
};




