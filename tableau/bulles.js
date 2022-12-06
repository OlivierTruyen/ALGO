// Le but est de trier un tableau nous-même (il faut mettre les éléments du plus petit au plus grand). Pour cela, on va procéder en plusieurs étapes :

// Étape 1 : écrire une fonction qui reçoit un tableau et un numéro de case (i). Son but est d'échanger les valeurs des cases i et i+1 si celles-ci ne sont pas dans le bon ordre.

let tab10=[10,8,15,7,9];
// 8 10 15 7 9
// 8 10 15 7 9
// 8 10 7 15 9
// 8 10 7 9 15


function bulle(tableau,i){ 
    if(tableau[i]>tableau[i+1]){
        let exchange=tableau[i];
        tableau[i] = tableau[i+1];
        tableau[i+1] = exchange;
    }       
}
// Étape 2 : écrire une fonction qui reçoit un tableau et qui applique l'étape 1 sur toutes les cases successives (cases 0/1, cases 1/2, cases 2/3, ..., cases avant-dernière/dernière).
function bulle2(tab){
    for(let i=0 ; i<tab.length-1 ; i++){
        bulle(tab,i);

    }

}
bulle2(tab10);
console.log(tab10);
// Étape 3 : écrire une fonction qui reçoit un tableau et qui le trie en appelant la fonction 2 autant de fois qu'il y a d'éléments dans le tableau.
function bulle3(tab){
    for(let i=0 ; i<tab.length-1 ; i++){
        bulle2(tab,i);

    }

}
bulle3(tab10);
console.log(tab10);

// Note : on peut visualiser cet algorithme sur cette image <https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/211162/a9b17b54-b6dd-1602-be04-6fc125676b7a.gif>.