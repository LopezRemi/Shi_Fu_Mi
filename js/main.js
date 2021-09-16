 alert("Bienvenue sur le jeu 'Shi fu Mi'");

function greetings(firstname) {
    return "Bienvenue" + firstname;
}

function noNumber(firstname) {
    for (var i = 0 ; i < firstname.length; i++) {
        alert(firstname[i])
    }
}


var v = false

    while (v == false) {
        firstname = prompt("qu'elle est votre prénom ?");
        noNumber(firstname);

    if (firstname.length < 15 && firstname.length != 0) {
        alert("Merci "+ firstname)
        v = true
    }
    else {
        alert("Ce prénom est trop long");
    }}  



 






    
