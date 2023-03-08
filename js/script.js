// INPUT
// chiedere all'utente il numero di chilometri che vuole percorrere
// chiedere l'età del passeggero

const UserKm = parseInt(prompt("Quanti KM vuoi percorrere?"));
const UserAge = parseInt(prompt("Quanti anni hai ?"));
console.log(UserKm, UserAge);


// ELABORAZIONE DATI con OUTPUT

// calcolo prezzo intero del biglietto
const ticketPrice = (0.21 * UserKm)
console.log(ticketPrice);

// calcolo prezzo biglietto con i 2 sconti
// per minorenni
const specialPrice1 = parseInt(ticketPrice - (ticketPrice * 0.2));
// per over 65
const specialPrice2 = parseInt(ticketPrice - (ticketPrice * 0.4));

// calcolo

if (UserAge < 18) {
    specialPrice1.toFixed(2);
    console.log (specialPrice1);
    alert ('Hai diritto ad uno sconto del 20%');
    document.getElementById("price").innerHTML =
    `Il costo del tuo biglietto è: ${specialPrice1.toFixed(2)} €`;
} else if (UserAge >= 65) {
    specialPrice2;
    console.log(specialPrice2)
    alert ('Hai diritto ad uno sconto del 40%');
    document.getElementById("price").innerHTML =
    `Il costo del tuo biglietto è: ${specialPrice2.toFixed(2)} €`;
} else {
    ticketPrice;
    document.getElementById("price").innerHTML =
    `Il costo del tuo biglietto è: ${ticketPrice.toFixed(2)} €`;
}
