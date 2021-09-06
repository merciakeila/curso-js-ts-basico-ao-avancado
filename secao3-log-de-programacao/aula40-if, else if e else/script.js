const permission = (idade) => {
    if (idade >= 18) {
        console.log(`Sua idade é: ${idade}, pode dirigir`);
    } else {
        console.log(`Sua idade é: ${idade}, NÃO pode dirigir`);
    }
};

//permission(20);

const festa = (nome, idade) => {
    if (idade >= 18) {
        console.log(
            `Seu nome é: ${nome} e sua idade é ${idade}, pode entrar na festa`
        );
    } else if (idade >= 16) {
        console.log(
            `Seu nome é: ${nome} e sua idade é ${idade}, pode entrar APENAS acompanhada por um responsável na festa`
        );
    } else if (idade < 16) {
        console.log(
            `Seu nome é: ${nome} e sua idade é ${idade}, não pode entrar na festa`
        );
    }
};

//festa('Mércia', 16);

//Verificar se é homem ou mulher

const verifySexo = (sexo) => {
    switch (sexo) {
        case 'F':
            console.log('Você é mulher');
            break;
        case 'M':
            console.log('Você é homem');
            break;
        default:
    }
};

//verifySexo('F');
