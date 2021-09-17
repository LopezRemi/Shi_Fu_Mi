 alert("Bienvenue sur le jeu 'Shi fu Mi' fabriqué par mes soins");

//variable utisilé dans le choix du Prénom
var g = false
var n = false

//boucle utilisé pour le choix du prénom
    while (n == false) {
        firstname = prompt("Qu'elle est votre prénom ?");
        var n = false
    if (firstname.length >= 3 && firstname.length != null) {
        alert("Merci "+ firstname)
       var n = true
    }
    if (firstname.length < 3 && firstname.length > 0) {
        alert("Prénom trop court")
        var n = false
    }
    if (firstname.length == 0) {
        alert("Veuillez entrer un prénom")
        var n = false
 }
}  


//fonction utilisé pour déterminer le choix de l'ordinateur.
function moveOfAi () {
 
    var compMove = Math.random();
if (compMove < 0.34) {
    compMove = "pierre";
} else if(compMove <= 0.67) {
    compMove = "feuille";
} else {
    compMove = "ciseaux";
    }
  return
}

//fonction utilisé pour déterminer le choix du joueur.
function moveOfPlayer () {
    var playerMove = 
}





