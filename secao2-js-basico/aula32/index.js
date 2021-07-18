/*
* FUNÇÃO SIMPLES
*/

// function saudacao(nome) {
//     return console.log(`Bom dia, ${nome}`);
// }

// saudacao('Mércia') //Função sendo executada, essa é a chamada.

//RETORNAR VALORES EM UMA VARIAVEL

// function saudacao(nome) {
//     return `Bom dia, ${nome}`;
// }

// const name = saudacao('Mercia'); //O que será salvo na variavel é tudo o que é retornado na função;
// console.log(name)

/*
* FUNÇÃO SIMPLES COM DECLARAÇÃO CLÁSSICA
*/

// function soma(a, b) {
//     resultado = a + b;
//     return resultado;
// }

// console.log(soma(2, 2))

/*
* FUNÇÃO ANONIMA
*/

// const raiz = function(n) {
//     return n ** 0.5;
// }

// console.log(raiz(9));

/*
* ARROW FUNCTION (FUNÇÃO COM SETA) - DECLARAÇÃO MODERNA
*/
//O objetivo é simplificar a vida de quem programa. Faz a mesma coisa das outras funções, a diferença é que ele não precisa por exemplo usar o return ou chaves (somente quando tem apenas uma linha de código)...

const raiz = (n) => n ** 0.5;

console.log(raiz(9));