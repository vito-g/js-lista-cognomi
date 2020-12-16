var surname = prompt('Inserisci il tuo cognome.');
var lista = ['Aranzulla', 'Dionigi', 'Conte', 'Casamassima', 'Carone', 'Decandia', 'Saponaro', 'Zaccaria', 'Tramutoli'];
//Istruzione per Aggiunta in Lista del Cognome Utente:
lista.push(surname);
//Richiamo Div HTML:
var listaAggiornata = document.getElementById("output");
//Inserimento (Stampa) risultato (lista aggiornata) nel Div HTML richiamato:
listaAggiornata.innerHTML = lista;


// console.log('lista aggiornata: ' + lista.push('surname'));
