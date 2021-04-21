// Les Fonctions

var nombre = 97

// La syntaxe de la Function est la suivante 'function + nomdelavfunction (variable)
function estPremier(nombre) {
    for (var i = 2; 1 < nombre; i++){
        if(nombre % i === 0){ // si 91 est divisible par I alors il est égale a 0, cela va m'afficher le résultat dans la console
            return false // le mot cle return met fin a la fonction et affiche la valeur false ou true si le chiffre est premier
        }
    }
    return true
}


// Les Fonction peuvent prendre plusieurs paramettre 

// on va prendre une function qui va multipier 2 nombre

function multiplie(a, b) { // on a declarer la function multiplie, et entre paranthese les multiplication
    if (b === undefined) {  // si b est undefined b = 0
        b = 1
    }
    return a * b
}

// si on veut maintenant utilisé la function multiplie dans la console 
// il faut juste marquer (multiplie(2, 6)) remplacer le a et le b dans la console pour effectuer la multiplication

// Maintenant on va faire une petite function pour la partie éléve 

var classA = [{
    nom: 'Marc',
    moyenne: 15
}, {
    nom: 'Jean',
    moyenne: 12
},{
    nom: 'Antoine',
    moyenne: 9
}]

var classB = [{
    nom: 'Marie',
    moyenne: 18
}, {
    nom: 'Laurine',
    moyenne: 5
},{
    nom: 'Gabriel',
    moyenne: 9
}]

function afficheQuiALaMoyenne(eleves) {
    for(var i = 0; i < eleves.length; i++) {
        var eleves = eleves[i]
        if(eleves.moyenne >= 10){
            console.log(eleves.nom + "Tu as la moyenne !")
        } else {
            console.log(eleves.nom + "tu n'as pas la moyenne")
        }
    }
}

// on peut écrire une function autrement aussi par exemple 

// var techniqueDeJutsu = function 