// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
let tab1=[1,2,3,5,8,10]
function displayLast(array){
    let nombre= array[array.length-1];
    console.log(nombre);
}
displayLast(tab1);
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function returnLast(array){
    let nombre= array[array.length-1];
    return nombre ;
}
console.log(returnLast(tab1));
// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
let tab10=[100,200,5,5,5,8,4,25,50];



function returnMini(array){
    let nombre=array[0];
    
    for(let i=0 ; i<array.length ; i++){
        if(array[i]<nombre){
            nombre = array[i];
        }
    }
    return nombre;
}
console.log(returnMini(tab10));
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function returnMax(array){
    let nombre=array[0];
    
    for(let i=0 ; i<array.length ; i++){
        if(array[i]>nombre){
            nombre = array[i];
        }
    }
    return nombre;
}
console.log(returnMax(tab10));

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function nombreDeFois(tab,nombre){
    // parcourir tableau 
    let nb=0;

    for (let i=0 ; i<tab.length ; i++){
        // console.log(tab[i]);
        if(tab[i]==nombre){
            nb=nb+1
        }
    }
    return nb;
}
console.log(nombreDeFois(tab10,10000));


// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function bool(tab,nombre){
    // parcourir tableau 
   

    for (let i=0 ; i<tab.length ; i++){
        // console.log(tab[i]);
        if(tab[i]==nombre){
            return true
        }
    }
    return false;
}
console.log(bool(tab10,5));

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].
let tab5=[];

for (let i=0 ; i<7777;i++){
   
    tab5.push(i+1);
}
console.log(tab5);

// Créer un tableau qui contient [10,20,30,...,77770].
let tab6=[];

for (let i=10 ; i<=77770; i=i+10){
    tab6.push(i);
}
console.log(tab6);

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let tab7=[];

for (let i=0 ; i<=77770; i++){
    tab6[i]/=2
}

for (let i=0 ; i<tab6.length; i++){
    tab7.push(tab6[i]);
}
console.log(tab7);
// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
function suppValeur(tab){
    while(tab[tab.length -1]<50){
        tab.pop();
    }
    return tab
}

console.log(suppValeur([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]