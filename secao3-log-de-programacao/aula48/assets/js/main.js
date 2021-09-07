const resultado = document.querySelector('.resultado');

function getDiaSemanaText(diaSemana) {
    let diaSemanaText;

    switch (diaSemana) {
        case 0:
            diaSemanaText = 'Domingo';
            return diaSemanaText;
        case 1:
            diaSemanaText = 'Segunda-feira';
            return diaSemanaText;
        case 2:
            diaSemanaText = 'Terça-feira';
            return diaSemanaText;
        case 3:
            diaSemanaText = 'Quarta-feira';
            return diaSemanaText;
        case 4:
            diaSemanaText = 'Quinta-feira';
            return diaSemanaText;
        case 5:
            diaSemanaText = 'Sexta-feira';
            return diaSemanaText;
        case 6:
            diaSemanaText = 'Sabádo';
            return diaSemanaText;
        default:
            diaSemanaText = 'Dia não especificado';
            return diaSemanaText;
    }
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatData(data) {
    const diaSemana = data.getDay();
    const diaSemanaText = getDiaSemanaText(diaSemana);

    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMoth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    const resultadoData = `${diaSemanaText}, ${dia} de ${mes} de ${ano} ${hora}:${minuto}`

    return resultadoData;
}

resultado.innerHTML = formatData(resultadoData)