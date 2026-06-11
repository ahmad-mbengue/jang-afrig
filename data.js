const pays = [
{ cca3: "SEN", nom: "Sénégal", capitale: "Dakar" },
{ cca3: "MLI", nom: "Mali", capitale: "Bamako" },
{ cca3: "GHA", nom: "Ghana", capitale: "Accra" },
{ cca3: "KEN", nom: "Kenya", capitale: "Nairobi" },
{ cca3: "MAR", nom: "Maroc", capitale: "Rabat" }
];
function choisirAuHasard(tableau) {
const index = Math.floor(Math.random() * tableau.length);
return tableau[index];
console.log(choisirAuHasard(pays));
console.table(pays);
}



const etudiants = [
    { nom: "Ahmad", note: 15 },
    { nom: "Awa", note: 12 },
    { nom: "Moussa", note: 14 },
    { nom: "Fatou", note: 16 },
    { nom: "Ibrahima", note: 8 },
    { nom: "Khadija", note: 18 },
    { nom: "Omar", note: 13 },
    { nom: "Mariama", note: 17 },
    { nom: "Seynabou", note: 9 },
    { nom: "Cheikh", note: 19 }
];

const admis = etudiants.filter(e => e.note >= 10);

console.table(admis);
let somme = 0;

etudiants.forEach(e => {
    somme += e.note;
});

let moyenne = somme / etudiants.length;

console.log("Moyenne de la classe :", moyenne);;





const capitales = pays.map(p => p.capitale);

console.log(capitales);




const prixFCFA = [1000, 2500, 5000, 10000, 15000];

const prixEuros = prixFCFA.map(prix => prix / 656);

console.log(prixEuros);





