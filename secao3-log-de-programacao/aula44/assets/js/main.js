const form = document.querySelector('#form');
const result = document.querySelector('.result');

const calculaImc = (peso, altura) => peso / (altura * altura);

const mapToResult = (message, bg) => ({ message, bg });

const imcResultado = (peso, altura) => {
    const imc = calculaImc(peso, altura).toFixed(2);
    console.log(imc);
    if (imc > 40) {
        return mapToResult(
            `Seu imc é ${imc}, obesidade grau 3`,
            'imc-negative'
        );
    }
    if (imc >= 35) {
        return mapToResult(
            `Seu imc é ${imc}, obesidade grau 2`,
            'imc-negative'
        );
    }
    if (imc >= 30) {
        return mapToResult(
            `Seu imc é ${imc}, obesidade grau 1`,
            'imc-negative'
        );
    }
    if (imc >= 25) {
        return mapToResult(
            `Seu imc é ${imc}, está com sobrepeso`,
            'imc-danger'
        );
    }
    if (imc >= 19) {
        return mapToResult(
            `Seu imc é ${imc}, seu peso está normal.`,
            'imc-positive'
        );
    }

    return mapToResult(
        `Seu imc é ${imc} está abaixo do peso, o ideal é entre 18,5 e 24,9`,
        'imc-negative'
    );
};

const handleForm = (e) => {
    e.preventDefault();

    const peso = parseFloat(document.querySelector('#peso').value);
    const altura = parseFloat(document.querySelector('#altura').value);

    const resultadoTotal = imcResultado(peso, altura);

    result.innerHTML = `${resultadoTotal.message}`;
    result.classList.add('imc-result');
    result.classList.add(resultadoTotal.bg);
};

form.addEventListener('submit', handleForm);
