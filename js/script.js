//* STAMPARE IN CONSOLE E SU SCHERMO LA LISTA DELLA SPESA CONTENUTA NELL'ARRAY USANDO IL CICLO WHILE

//* PROCEDURA for

/*
1. Dichiaro l'array
2. Dichiaro la variabile che conterrà per esteso la stringa della lista della spesa
3. Creo un ciclo for con condizione assoggettata alla length dell'array
4. Nel ciclo for eseguo una concatenazione della variabile che deve contenere la stringa della lista della spesa
5. Stampo la stringa in console

// Dichiaro l'array
const shoppingList = ["Uova", "Pane", "Latte", "Biscotti", "Pasta", "Affettati", "Formaggio", "Verdura", "Frutta"];

// Dichiaro la variabile che conterrà per esteso la stringa della lista della spesa
let shoppingListItems = "<ul>";

// Creo un ciclo for con condizione assoggettata alla length dell'array
for (let i = 0; i < shoppingList.length; i++){

    // Nel ciclo for eseguo una concatenazione della variabile che deve contenere la stringa della lista della spesa
    shoppingListItems += `<li>${shoppingList[i]}</li>`;
};
shoppingListItems += "</ul>";

// Stampo la stringa in console
console.log(shoppingListItems);
*/

//* PROCEDURA while

/*
1. Dichiaro l'array
2. Dichiaro la variabile che conterrà per esteso la stringa della lista della spesa
3. Dichiaro la variabile d'appoggio i
4. Creo un ciclo while con condizione "i assoggettata alla length dell'array"
5. Nel ciclo while eseguo una concatenazione della variabile che deve contenere la stringa della lista della spesa
6. Per ultimo nel ciclo while, inserisco l'incremento i++ ad ogni giro
7. Stampo la stringa in console
*/

// Dichiaro l'array
const shoppingList = ["Uova", "Pane", "Latte", "Biscotti", "Pasta", "Affettati", "Formaggio", "Verdura", "Frutta"];

// Dichiaro la variabile che conterrà per esteso la stringa della lista della spesa
let shoppingListItems = "<ul>";

// Dichiaro la variabile d'appoggio i
let i = 0;

// Creo un ciclo while con condizione "i assoggettata alla length dell'array"
while (i < shoppingList.length){

    // Nel ciclo while eseguo una concatenazione della variabile che deve contenere la stringa della lista della spesa
    shoppingListItems += `<li>${shoppingList[i]}</li>`;

    // Per ultimo nel ciclo while, inserisco l'incremento i++ ad ogni giro
    i++
}
shoppingListItems += "</ul>";

// Stampo la stringa in console
console.log(shoppingListItems);

//* Stampo la lista su schermo

const shoppingListElement = document.querySelector('#shopping-list .list-items');

shoppingListElement.innerHTML = shoppingListItems;