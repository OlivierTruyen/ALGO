// Exercice all2_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
let tab1 = [10,20,-30,20,50,-60];


function positionBiggest(tab){
    let position=0;

    for (let i=0 ; i<tab.length ;i++){
        if(tab[i]>tab[position]){
            position= i

        }

    }
    return position;
}
console.log(positionBiggest(tab1));
// Exemple : positionBiggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1

// Exercice all2_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.



function sommeTab(tab){
    let somme = 0;
    for(let i=0 ; i<tab.length;i++){
        somme = somme + tab[i];
    }
    return somme
}
console.log(sommeTab(tab1));

// Exercice all2_3 : écrire une fonction qui retourne la somme des valeurs positives d'un tableau.
//  tab1 = [10,20,30,20,50,60];

 function sommePositif(tab){
    let somme=0;
    for(let i=0 ; i<tab.length ; i++){
        if(tab[i]>0){
            somme= somme + tab[i]
        }

    }
    return somme
 }
 console.log(sommePositif(tab1));


// Exercice all2_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'un tableau.

function sommeNegative(tab){
    let somme=0;
    for(let i=0 ; i<tab.length ; i++){
        if(tab[i]<0){
            somme= somme + tab[i]
        }

    }
    return somme
 }
 console.log(sommeNegative(tab1));