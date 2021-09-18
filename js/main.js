 alert("Bienvenue sur le jeu de 'Shi fu Mi' fabriqué par mes soins");

//variable utisilé dans le choix du Prénom
var g = false
var n = false

//boucle utilisé pour le choix du prénom
while (n == false) {
        firstname = prompt("Quel est votre prénom ?");
        var n = false
    if (firstname.length < 15 && firstname.length != null && firstname.length > 2 ) {
        alert("Merci "+ firstname + " préparez vous à jouer contre la RNG ! ")
       var n = true
    }
    if (firstname.length < 3 && firstname.length > 0) {
        alert("Prénom trop court")
        var n = false
    }
    if (firstname.length > 15) {
        alert("Prénom trop long")
        var n = false
    }    
    if (firstname.length == 0) {
        alert("Veuillez entrer un prénom")
        var n = false
    } 
}  

//fonction utilisé pour déterminer le choix du joueur interdir les autres réponses et tolerer les entrées en Majuscules
var playerMove = prompt("Choisissez pierre, feuille, ou ciseaux ?");

function askPlayer () {
     playerMove = prompt("Faite un choix entre Pierre, Feuille ou ciseaux ?");
}

function notGoodEntry (){
    while (playerMove.toLowerCase() !== "pierre" && playerMove.toLowerCase() !== "feuille" && playerMove.toLowerCase() !== "ciseaux"){
        alert(playerMove + " Ceci n'est pas valide");
        askPlayer();
    }
}
notGoodEntry();


//fonction utilisé pour déterminer le choix de l'ordinateur.
var compMove = Math.random();
    if (compMove < 0.33) {
    compMove = "pierre";
    }  else if(compMove <= 0.66) {
    compMove = "feuille";
       }   else {
    compMove = "ciseaux";
} 

//code pour comparer les résultats du joueur et de l'ordinateur 
    if (playerMove.toLowerCase() === compMove){
        alert("égalité !")
}   else if (playerMove.toLowerCase() === "pierre" && compMove === "ciseaux" || playerMove.toLowerCase() === "feuille" && compMove === "pierre" ||
    playerMove.toLowerCase() === "ciseaux" && compMove === "feuille"){
        alert("l'ordinateur a joué " + compMove + " vous avez gagné ! " + firstname)
        } else if (playerMove.toLowerCase() === "pierre" && compMove === "feuille" || playerMove.toLowerCase() === "feuille" && compMove === "ciseaux" ||
        playerMove.toLowerCase() === "ciseaux" && compMove === "pierre"){
            alert ("l'ordinateur a joué " + compMove + " vous avez perdu " + firstname + " :'(")
};
     