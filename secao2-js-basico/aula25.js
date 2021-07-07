// Manipulação de STRING

let string = '1234'
 
//EXIBIR UM ITEM NA POSIÇÃO DESEJADA
//No exemplo abaixo, está exbindo o primeiro elemento da string. O número 1.
console.log(string[2]);

//ESQUISAR POSIÇÃO DA PALAVRA - INDEXOF
//Alguma string, array de objetos ou objetos, já declarada em uma variavel. Quando não encontrado a palavra selecionada, é mostrado no console valor -1

console.log(string.indexOf(2))

// outro exemplos INDEXOF
let name = 'Mércia Keila'
console.log(name.indexOf('Keila')); //Será exibido a poisção que está a STRING Keila.

// Será exibido a poisção que ta depois do index 3 dessa LETRA, PALAVRA seja o que for.
console.log(name.lastIndexOf('Mércia', 3));

//ESQUISAR POSIÇÃO DA PALAVRA - LASTINDEXOF
//Alguma string, array de objetos ou objetos, já declarada em uma variavel. Quando não encontrado a palavra selecionada, é mostrado no console valor -1, busca dele funciona de TRÁS PARA FRENTE.
//O IndexOf, exibe a posição que está a string que queira identificar, a busca funciona da esquerda para a direita.
// O LastIndexOf tem o mesmo objetivo, porém faz a busca da direita para a esquerda e exibindo a a posição de acordar com essa lógica

//METODO PARA CORTAR UMA STRING (SERÁ INTERESSANTE PARA CORTAR OU SOMENTE EXBIR ITENS ATÉ UMA QUANTIDADE LIMITE) - SLICE

//METODO PARA CORTAR UM OU MAIS ITENS DE DENTRO DA STRING - SPLIT

//TAMANHO DE UMA STRING - LENGTH
console.log(name.length);

//EXPRESSÕES REGULAGRES
//Match(), search(),reaplace() ... entre outros 
//obs: curso de REGEX

