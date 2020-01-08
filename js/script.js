alert('welcome');
//Chiedi il proprio cognome all'utente
var cognomeUtente = prompt('inserisci il tuo cognome');
console.log(cognomeUtente);

//inserire il cognome in un array con altri cognomi
var cognomi = ['Sabellico', 'Palumbo', 'Gioia', 'Landi', 'Rossi', 'Venditti', 'Corelli'];
cognomi.push(cognomeUtente);
console.log(cognomi);

//pushare il cognome nella lista
cognomi.push(cognomeUtente);

// ordinare i cognomi in ordine alfabetico
cognomi.sort();
for (var i=0; i<cognomi.length; i++){
  document.getElementById('lista_cognomi').innerHTML += '<li>'+ cognomi[i] + '</li>';
  }

//specificare la posizione del cognome utente nella lista
  var position = cognomi.indexOf(cognomeUtente) + 1;
  document.getElementById("position").innerHTML = "posizione numero " + position + " dell'elenco utenti.";
