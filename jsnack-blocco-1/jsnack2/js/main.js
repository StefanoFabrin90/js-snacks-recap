// L’utente inserisce due parole in successione, con due prompt. 
// Il software stampa prima la parola più corta, poi la parola più lunga.

const parola1 = prompt('inserisci prima parola');
console.log(parola1);
const parola2 = prompt('inserisci seconda parola');
console.log(parola2);

if(parola1.length === parola2.length){
    // console.log('stessa lunghezza');
    document.getElementById('parola').innerHTML = `stessa lunghezza:${parola1} ${parola2}`;
} else if (parola1.length > parola2.length){
    // console.log(`la prima parola é la piu lunga: ${parola1} ${parola2}`);
    document.getElementById('parola').innerHTML = `la parola piu lunga é:${parola1}`;
} else  {
    // console.log(`la seconda parola é la piu lunga: ${parola2} ${parola1}`);
    document.getElementById('parola').innerHTML = `la parola piu lunga é:${parola2}`;
}


    