// Les Boucles 

// Les boucles vont nous permettre d'utiliser un code un certains nombre de fois
// var i = 0
// while (i < 11) { // While + condition 
//     console.log(i)
//     if (i === 3){ // si I est égale a 3 alors la boucle va s'arreter a 3 et non a 10
//         break
//     }
//     i = i + 1 //(i++) = i + 1 /
// }

// for(var j = 0; j < 11; j++){
//     console.log(j)
// }

// ci dessus nous avons deux mannieres différente d'écrire le code avec la meme signification
// console.log('Salut')

// suite a l'exemple au dessus while va continuer de s'executer jusqu'a 10  

// Tant que CONDITION est vrai alors il continue 

// While marche aussi dans un tableau nous allons le voir ci dessous 

// var eleves = ['Jean', 'Marc', 'Marion', 'Jarod', 'Stephane']

// for(var i = 0; i < eleves.length; i++){ // j'ai rajouter eleves.lenght a la place du chiffre 3 pour montrer que je peux rajouter autant de nom que je veux javascript va comprendre qu'il y a plus d'élement dans le tableau
//     console.log('Bonjour' + eleves[i])
// }

// cette methote nous eviteras d'avoir un code plus long comme ci dessous 

// var eleves = ['Jean', 'Marc', 'Marion']
// console.log ('Bonjour' + eleves[0])
// console.log ('Bonjour' + eleves[1])
// console.log ('Bonjour' + eleves[2])

// Dans les deux cas le résultat et le meme sauf que avec le for ou while cela nous prends moins de ligne

// for(var i = eleves.length - 1; i >= 0; i--){ // ici au debut a la place de var i = 0 pour commencer par le debut soit 'Jean' on comment par 'Stephane' graçe a eleves.lenght -1
//     console.log('Bonjour' + eleves[i])
// }

// Nous allons voir maintenant un exemple concret de l'utilisation de while

// var nombre = 97
// var estPremier = true

// for(var i = 2; 1 < nombre; i++){
//     if(nombre % i === 0){ // si 91 est divisible par I alors il est égale a 0, cela va m'afficher le résultat dans la console
//     estPremier = false
//     console.log("Ce nombre n'est pas premier");
//     console.log(nombre + ' est divisible par ' + i);
//     break;
//     }
// }

// if (estPremier){
//     console.log('Ce nombre est premier')
// }

// Le résultat donne 91 est divisible par 13 donc 91 est pas premier 

// on va creer un tableau

var eleves = [{
    nom: 'Marc',
    moyenne: 15
}, {
    nom: 'Marion',
    moyenne: 18
}, {
    nom: 'Antoinne',
    moyenne: 5
}]

for (var i = 0;i < eleves.length; i++){
    var eleve = eleves[i]
    if(eleve.moyenne < 10){
        console.log(eleve.nom + " n'a pas la moyenne")
    } else {
        console.log(eleve.nom + " a la moyenne")
    }
}