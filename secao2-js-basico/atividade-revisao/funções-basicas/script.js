const soma = (a, b) => {
    const resultado = a + b;

    return resultado;
};

const teste = soma(2, 4);
console.log(teste);

const nome = (nome) => {
    const nomeFinal = nome;

    return nomeFinal;
};

const resultadoNome = nome('Mercia keila');
console.log(resultadoNome);

//Soma todos os números do arrays
const resultadoSoma = (numero) => {
    var total = 0;

    for (var num of numero) {
        total = total + num;
    }

    return total;
};

var array = [1, 2, 3, 4];

var resultadoSomaTeste = resultadoSoma(array);

console.log(resultadoSomaTeste);

// Usando o rest no paramentro
const escreverEnd = (rua, cidade, pais, ...complemento) => {
    console.log(rua);
    console.log(cidade);
    console.log(pais);

    console.log(complemento);
};

escreverEnd(
    'Rua ladeira dos contentes',
    'Salvador',
    'Brasil',
    'Casa apt',
    'CEP: 453453'
);

//Função de Callback

const somaCallback = (a, b, fnCallback) => {
    return fnCallback(a + b);
};

console.log(
    somaCallback(10, 3, function (total) {
        return total * 2;
    })
);

const somaCallback2 = (a, b, fnCallback) => {
    return fnCallback(a + b);
};

const multiplica = function (total) {
    return total * 2;
};

console.log(somaCallback2(10, 3, multiplica));
