// Les conditions //

// Les conditions vont nous permetres de tester qu'une valeur est bien celle attendues 

// on va creer une variable avec un objet 

var marc = {
    nom: 'Marc',
    age: 25,
    moyenne: 20
}
 if (marc.age >= 18) {
     console.log('Tu peux passer ton permis !') // si l'age est = ou superieur a 18 tu peux passer ton permis
 } else if (marc.age >= 15) {
     console.log('Tu peux passer la conduite accompgnée !') // sinon si tu peux passer la conduite accompagnée
 } else {
     console.log ('tu peux pas conduire ') // sinon tu peux pas encore conduire 
 }

if (marc.age >= 18 && marc.age <= 25 ) {  // (et = &&) (ou = || )
    console.log('Bravo ! tu as le droit au tarif jeune')
} else {
    console.log("Vous n'avez pas le droit au tarif jeune")
}

// if (marc.age < 18 || marc.age > 25 ) {  // (et = &&) (ou = || )
//     console.log("Vous n'avez pas le droit a l'accés jeune")
// } else {
//     console.log('Bravo ! tu as le droit au tarif jeune')
// }

if (marc.age >= 18 && marc.age <=25 || marc.age > 70){ // (>= Egale et superieur a "18") (<= Egale et inferieur a "25" ) (> Superieur a "70")
    console.log('Bravo ! tu as le droit au tarif reduit')
} else {
    console.log("Vous n'avez pas le droit au tarif reduit")
}

// if (marc.age == 18){ // (== est égale a "18")
//     console.log('Bravo ! tu as 18 ans')
// } else {
//     console.log("tu n'as pas 18 ans")
// }

// Le SwitchKey permet de dire si une condition a tel valeur je fais cela si elle a une autre je fais autrement 

// if (marc.age === 18){
//     console.log('Bravo ! tu as 18 ans')
// } else if (marc.age === 25){
//     console.log('Bravo ! tu as un quart de siecle')
// } else if (marc.age === 50){
//     console.log('Bravo ! tu as un demie siecle')
// }

// Pour écrire en switchKey il faut faire comme ci dessous 

switch(marc.age) {
    case 18:
        console.log('Bravo ! tu as 18 ans')
        break
    case 25:
        console.log('Bravo ! tu as un quart de siecle')
        break
    case 50:
        console.log('Bravo ! tu as un demie siecle')
        break
    case 100:
        console.log('Bravo ! tu es mort')
        break
    default:
        console.log('Joyeux Anniversaire')
}

// on va voir un syntaxe raccourci pour le if et le else if avec du ternary

console.log(marc.age >= 18 ? 'tu es majeur' : 'tu es mineur')

// Voila on a fini les conditions !