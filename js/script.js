//Scrivere un programma che chieda all’utente:
// -il numero di chilometri da percorrere
// -età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// -il prezzo del biglietto è definito in base ai km (0.21 € al km)
// -va applicato uno sconto del 20% per i minorenni
// -va applicato uno sconto del 40% per gli over 65.

const name = document.getElementById("nome")
const distance = document.getElementById("km")
const Età = document.getElementById("età")
const buttonGenera = document.getElementById("genera")
const buttonAnnulla = document.getElementById("annulla")
const prezzoPerKm = 0.21;

// Calcolo del biglietto
