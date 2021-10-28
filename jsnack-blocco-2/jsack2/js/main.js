// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero succesivo

let number = parseInt( prompt('inserisci un numero da 1 a 100') );

if ( number % 2 ===0){
    // console.log('numero pari');
    document.querySelector('.numero').innerHTML = `numero pari ${number}`
} else if ( number % 2 !==0){
    // console.log(`numero dispari succesivo ${number +1}`);
    document.querySelector('.numero').innerHTML = `dispari quindi il successivo ${number +1}`
}