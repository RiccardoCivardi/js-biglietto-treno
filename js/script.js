// Quanti km vuole percorrere l'utente
// Età dell'utente
// Costo al km: 0.21€
// Sconto 20% minorenni
// Sconto 40% over 65
// Output costo totale con 2 decimali

const kmUser = parseInt(prompt('Quanti km vuoi percorrere?'));
const ageUser = parseInt(prompt('Quanti anni hai?'));
const kmCost = 0.21;
const discountUnderage = 0.2;
const discountOver = 0.4;
const totalPrice = kmUser * kmCost;
let finalPrice = totalPrice;

if (ageUser < 18) {
  finalPrice -= finalPrice * discountUnderage;
} else if (ageUser >= 65) {
  finalPrice -= finalPrice * discountOver;
};

//console.log('Prezzo finale -->', finalPrice);

document.getElementById('output').innerText += ' ' + finalPrice.toFixed(2) + '€';

