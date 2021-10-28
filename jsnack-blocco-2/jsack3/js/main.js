// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

let nomi = ['stefano','luca','michele','chira','lisa'];
let cognomi = ['rossi','ferretti','montanari','fabrin','mazzalovo'];

let nomiRandom = Math.floor(Math.random()*nomi.length);
console.log(nomi[nomiRandom]);


let cognomiRandom = Math.floor(Math.random()*cognomi.length);
console.log(cognomi[cognomiRandom]);

document.getElementById('lista').innerHTML = `${nomi[nomiRandom]} ${cognomi[cognomiRandom]}`;
