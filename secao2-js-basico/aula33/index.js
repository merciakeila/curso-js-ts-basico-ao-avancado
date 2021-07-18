/*
* FUNÇÃO QUE RETORNA CARACTERISTICAS
*/

// const criaPessoa = (nome1, sobrenome1, idade1) => {
//     return {
//         nome: nome1,
//         sobrenome: sobrenome1,
//         idade: idade1,
//     }
// }

// const pessoa1 = criaPessoa('Mercia', 'Keila', 24)
// const pessoa2 = criaPessoa("Jose", "Maia", 26);

// console.log(pessoa1, pessoa2);

/*
* OBJETOS AVANÇADOS
*/

// Dentro de um objeto, pode ter booleanos, strings, numbers e funções. No exemplos abaixo está sendo demonstrado Numbers, Strings e Funções.

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    fala() {
        console.log(`À minha idade atual é ${this.idade}`)
    },
    incrementaIdade() {
        let result = ++this.idade;
        console.log('Minha idade incrementada é: ', result);
    }
}

pessoa1.fala();
pessoa1.incrementaIdade()