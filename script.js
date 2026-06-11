function direBonjour(nom) {
return `Bonjour ${nom}, bienvenue sur Jàng Afrig !`;
}
console.log(direBonjour("Cheikh"));
console.log(direBonjour("Ndèye"));

function appreciation(note) {
if (note >= 16) {
return "Très bien";
} else if (note >= 12) {
return "Bien";
} else if (note >= 10) {
return "Passable";
} else {
return "À retravailler";
}
}
console.log(appreciation(14)); // "Bien"
console.log(appreciation(8)); // "À retravailler"

function statutMajorite(age) {
return age >= 18 ? "majeur" : "mineur";
}
console.log(statutMajorite(20)); // "majeur"
console.log(statutMajorite(16)); // "mineur"

const pays = ["Sénégal", "Mali", "Ghana", "Kenya"];
for (const nom of pays) {
console.log(`Pays africain : ${nom}`);
}
console.log(`Il y a ${pays.length} pays dans la liste.`);


function fcfaversEuro(montant) {
const tauxChange = 656;
return montant / tauxChange;
}
console.log(fcfaversEuro(10000)); // 15.23

function moyenne(notes) {
let somme = 0;
for (const note of notes) {
somme += note;
}
return somme/notes.length;
}
console.log(moyenne([12, 15, 18])); // 15


function estMajeur(age) {
return age >= 18;
}
console.log(estMajeur(20)); // true
console.log(estMajeur(16)); // false


function fizzBuzzSenegal() {
for (let n = 1; n <= 30; n++) {
if (n % 15 === 0) {
console.log("Thiéboudienne");
} else if (n % 3 === 0) {
console.log("Thié");
} else if (n % 5 === 0) {
console.log("Bou");
} else {
console.log(n);
}
}
}
fizzBuzzSenegal();


function estPalindrome(mot) {
let inverse = "";
for (const lettre of mot) {
inverse = lettre + inverse; // on empile à l'envers
}
return mot === inverse;
}
console.log(estPalindrome("kayak")); // true
console.log(estPalindrome("Dakar")); // false