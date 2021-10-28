// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

let nomi = ['stefano','luca','michele','chira','lisa'];
let cognomi = ['rossi','ferretti','montanari','fabrin','mazzalovo'];

let nomiRandom = Math.floor(Math.random()*nomi.length);
console.log(nomi[nomiRandom]);


let cognomiRandom = Math.floor(Math.random()*cognomi.length);
console.log(cognomi[cognomiRandom]);

document.getElementById('lista').innerHTML = `${nomi[nomiRandom]} ${cognomi[cognomiRandom]}`;

// var stringhe = [
//     "1- Lorem ipsum dolor sit amet, consectetur.",
//     "2- Nulla imperdiet, est non laoreet laoreet.",
//     "3- Ut sagittis eu lorem eget semper",
//  ];
//  var randomNum = Math.floor(Math.random()*stringhe.length);
 
//  document.write(stringhe[randomNum]);