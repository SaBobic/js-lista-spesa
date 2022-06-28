//* STAMPARE IN CONSOLE E SU SCHERMO LA LISTA DELLA SPESA CONTENUTA NELL'ARRAY USANDO IL CICLO WHILE

//* PROCEDURA for

/*
1. Dichiaro l'array
2. Dichiaro la variabile che conterrà per esteso la stringa della lista della spesa
3. Creo un ciclo for con condizione assoggettata alla length dell'array
4. Nel ciclo for eseguo una concatenazione della variabile che deve contenere la stringa della lista della spesa
5. Stampo la stringa in console
*/

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