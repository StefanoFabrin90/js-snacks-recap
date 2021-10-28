




// Crea un array vuoto.
const array = [];

// Chiedi per 6 volte all’utente di inserire un numero,
for (let i = 0; i < 6; i++){
    const number = parseInt( prompt('inserisci un numero') );

    // se è dispari inseriscilo nell’array
    if (number % 2 !== 0){
        array.push(number);
    }
}

console.log(array);
document.getElementById('dispari').innerHTML = `${array}`


