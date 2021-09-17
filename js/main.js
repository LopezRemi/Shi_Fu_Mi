 alert("Bienvenue sur le jeu 'Shi fu Mi' fabriqué par mes soins");

//variable utisilé dans le choix du Prénom
var g = false
var n = false

//boucle utilisé pour le choix du prénom
while (n == false) {
        firstname = prompt("Qu'elle est votre prénom ?");
        var n = false
    if (firstname.length < 15 && firstname.length != null && firstname.length > 2 ) {
        alert("Merci "+ firstname + " préparer vous a jouer ")
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
    if (compMove < 0.34) {
    compMove = "pierre";
    }  else if(compMove <= 0.67) {
    compMove = "feuille";
       }   else {
    compMove = "ciseaux";
} 

//code pour comparer les résultats du joueur et de l'utilisateur    
    if (playerMove === compMove){
        alert("égalité")
}   else if (playerMove === "pierre","Pierre" && compMove === "ciseaux" || playerMove === "feuille","Feuille" && compMove === "pierre" ||
    playerMove === "ciseaux","Ciseaux" && compMove === "feuille"){
        alert("l'ordinateur a joué " + compMove + " vous avez gagnez ! " + firstname)
        } else {
            alert ("l'ordinateur a joué " + compMove + " vous avez perdus " + firstname + " :'(")
};
     