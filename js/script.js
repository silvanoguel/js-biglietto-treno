// INPUT
// chiedere all'utente il numero di chilometri che vuole percorrere
// chiedere l'età del passeggero

const UserKm = parseInt(prompt("Quanti KM vuoi percorrere?"));
const UserAge = parseInt(prompt("Quanti anni hai ?"));
console.log(UserKm, UserAge);

// ELABORAZIONE DATI

//Logica
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
