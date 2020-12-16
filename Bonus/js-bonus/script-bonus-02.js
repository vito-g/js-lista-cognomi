var cognome = prompt('Inserisci il tuo cognome.');
var surname = cognome.toUpperCase();
var lista = ['Aranzulla', ' Dionigi', ' Conte', ' Casamassima', ' Carone', ' Decandia', ' Saponaro', ' Zaccaria', ' Tramutoli'];
var listaUppercased = lista.map(name => name.toUpperCase());

if (surname) {
//Istruzione per Aggiunta in Lista del Cognome Utente:
listaUppercased.push(surname);
//Richiamo Div HTML attraverso var ad esso assegnata:
var listaAggiornata = document.getElementById("output");
//Inserimento (Stampa) risultato (lista aggiornata e Ordinata Alfabeticamente(a mezzo 'sort')) nel Div HTML richiamato:
listaAggiornata.innerHTML = listaUppercased.sort();
var aggiornamento = listaUppercased.sort();
var inOrdine = document.getElementById('ordine');
console.log(listaUppercased);
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
