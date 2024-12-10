//Scrivere un programma che chieda all’utente:
// -il numero di chilometri da percorrere
// -età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// -il prezzo del biglietto è definito in base ai km (0.21 € al km)
// -va applicato uno sconto del 20% per i minorenni
// -va applicato uno sconto del 40% per gli over 65.

const name = document.getElementById("nome")
const distance = document.getElementById("km")
const età = document.getElementById("età")
const buttonGenera = document.getElementById("genera")
const buttonAnnulla = document.getElementById("annulla")
const prezzoPerKm = 0.21;
const passeggeroOutput = document.getElementById("passeggero")
const offertaOutput = document.getElementById("offerta")
const carrozzaOutput = document.getElementById("carrozza")
const capOutput = document.getElementById("cap")
const prezzo_bigliettoOutput = document.getElementById("prezzo_biglietto")
const ticket_passeggeroOutput = document.getElementById("ticket_passeggero")

// Calcolo del biglietto
genera.addEventListener("click", function(){
    const carrozza = Math.floor(Math.random() * 13)
    const cap = Math.floor(Math.random() * 100000) + 90000;
    carrozzaOutput.innerHTML = carrozza
    capOutput.innerHTML = cap
    passeggeroOutput.innerHTML = name.value
    offertaOutput.innerHTML = "Biglietto standard"
    const finalTicket = ticket_passeggero.classList.remove("d-none")
  
  let prezzo = distance.value * prezzoPerKm;
  if (età.value === "opzione2") {
    prezzo -= prezzo * 0.20; 
    offertaOutput.innerHTML = "Biglietto under 18"
  }
  if (età.value === "opzione3"){
      prezzo -= prezzo * 0.40;
      offertaOutput.innerHTML = "Biglietto over 65"
  }
  prezzo_bigliettoOutput.innerHTML = prezzo.toFixed(2)
  });
  
  annulla.addEventListener("click", function(){
    const finalTicket = ticket_passeggeroOutput.classList.add("d-none")
  })
