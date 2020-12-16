var surname = prompt('Inserisci il tuo cognome.');
var lista = ['Aranzulla', 'Dionigi', 'Conte', 'Casamassima', 'Carone', 'Decandia', 'Saponaro', 'Zaccaria', 'Tramutoli'];

if (surname) {
//Istruzione per Aggiunta in Lista del Cognome Utente:
lista.push(surname);
//Richiamo Div HTML attraverso var ad esso assegnata:
var listaAggiornata = document.getElementById("output");
//Inserimento (Stampa) risultato (lista aggiornata e Ordinata Alfabeticamente(a mezzo 'sort')) nel Div HTML richiamato:
listaAggiornata.innerHTML = lista.sort();
var aggiornamento = lista.sort();
var inOrdine = document.getElementById('ordine');

for ( var i=0; i < aggiornamento.length; i++ ) {
  //Crea un Item per ogni voce della lista (precedentemente aggiornata ed ordinata) e lo inserisce all'interno dell Ul richiamata dalla var inOrdine dichiarata appena sopra:
  inOrdine.innerHTML += '<li>' + aggiornamento[i] + '</li>';
}
// assegnata una var che indica l'indice del cognome utente all'interno dell'array (precedentemente aggiornato e ordinato):
var posizioneArray = aggiornamento.indexOf(surname);
console.log(surname + ' ha indice ' + posizioneArray + ' all\'interno dell\'array.' );
// assegnata una var che indica la posizione del cognome utente all'interno della lista (precedentemente aggiornata e ordinata)
var posizione = posizioneArray + 1;
console.log(surname + ' occupa la posizione numero ' + posizione + ' all\'interno della lista.' );
var outputPosition = document.getElementById('position');
outputPosition.innerText = 'Il cognome ' + surname + ' occupa la posizione numero ' + posizione;
} else {
  alert('Il campo è rimasto vuoto');
}
