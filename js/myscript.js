const miavariabile = prompt("il tuo nome è");
document.write (`il tuo nome è: ${miavariabile}`);

const miavariabile1 = prompt(" il tuo cognome è");
document.write (` il tuo cognome è: ${miavariabile1}`);

const miavariabile2 = prompt(" il tuo colore preferito è");
document.write (` il tuo colore preferito è: ${miavariabile2}`);

const variabilenumero= 21;

const password = ` Ciao ${miavariabile} ${miavariabile1} il tuo colore preferito è ${miavariabile2} la password è: ${miavariabile + miavariabile1 + miavariabile2 +variabilenumero}`;
document.write (password);