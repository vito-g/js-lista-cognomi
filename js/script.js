var surname = prompt('Inserisci il tuo cognome.');
var lista = ['Aranzulla', 'Dionigi', 'Conte', 'Casamassima', 'Carone', 'Decandia', 'Saponaro', 'Zaccaria', 'Tramutoli'];
//Istruzione per Aggiunta in Lista del Cognome Utente:
lista.push(surname);
//Richiamo Div HTML attraverso var ad esso assegnata:
var listaAggiornata = document.getElementById("output");
//Inserimento (Stampa) risultato (lista aggiornata e Ordinata Alfabeticamente(a mezzo 'sort')) nel Div HTML richiamato:
listaAggiornata.innerHTML = lista.sort();
var aggiornamento = lista.sort();


// console.log('lista aggiornata: ' + lista.push('surname'));
var inOrdine = document.getElementById('ordine');
for ( var i=0; i < aggiornamento.length; i++ ) {
  //Crea un Item per ogni voce della lista (precedentemente aggiornata ed ordinata) e lo inserisce all'interno dell Ul richiamata dalla var inOrdine dichiarata appena sopra
  inOrdine.innerHTML += '<li>' + aggiornamento[i] + '</li>';
}
