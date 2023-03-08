// INPUT
// chiedere all'utente il numero di chilometri che vuole percorrere
// chiedere l'età del passeggero

const UserKm = parseInt(prompt("Quanti KM vuoi percorrere?"));
const UserAge = parseInt(prompt("Quanti anni hai ?"));
console.log(UserKm, UserAge);


// ELABORAZIONE DATI

// calcolo prezzo intero del biglietto
const ticketPrice = (0.21 * UserKm)
console.log(ticketPrice);

// calcolo prezzo biglietto con i 2 sconti
// per minorenni
const specialPrice1 = parseInt (ticketPrice - (ticketPrice * 0.2));
// per over 65
const specialPrice2 = parseInt (ticketPrice - (ticketPrice * 0.4));


