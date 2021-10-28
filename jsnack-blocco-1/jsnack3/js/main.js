//  Il software deve chiedere per 5 volte all’utente di inserire un numero.
//  Il programma stampa la somma di tutti i numeri inseriti con for
//  e opzionalmente con while (edited) 


// for
let tot= 0;

for (let i = 0; i < 5; i++){
     const number = parseInt( prompt('inserisci i numeri') );
     tot += number;
     console.log(`${tot}`);
 }

 document.querySelector('.somma').innerHTML = `il totale é: ${tot}`;








// while

// let count = 0;

// while(count < 5){
//     const number = parseInt( prompt('inserisci i numeri') );
//     tot += number;
//     count++;
// }

// document.querySelector('.somma').innerHTML = `il totale é: ${tot}`;