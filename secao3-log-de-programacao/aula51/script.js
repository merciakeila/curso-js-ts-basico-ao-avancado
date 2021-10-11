/*
Atribuição via desustruturação com Objetos
*/

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320,
    }
}

const { nome, sobrenome, endereco } = pessoa;
console.log(pessoa)
console.log(endereco)

const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero) //Av Brasil 320