/*
Atribuição via desustruturação com Arrays
*/

let A = 'A'
let B = 'B'
let C = 'C'

/* EXEMPLO 1 */
const numeros = [1, 2, 3, 4, 5, 6];
//[A, B, C] = numeros
//const primeiroNumero = numeros[0];

//Cada variavel esta recebendo um item do array.
const [primeiroNumero, segundoNumero, ...resto] = numeros; //Metódo de desustruturação

console.log(primeiroNumero, segundoNumero); //Resultado: 1 2
console.log(resto); // 3, 4, 5, 6

/* EXEMPLO 2 */
const numeros2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    //[10, 11, 12]
];

const [lista1, lista2, lista3] = numeros2

console.log(numeros2) //lista total
console.log(lista2[2]) // Numero 6 que fica na posição 2 da lista2

