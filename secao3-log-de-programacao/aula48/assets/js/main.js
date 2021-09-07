const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
];
const dias = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
];

const getDiaSemanaText = (diaSemana) =>
    dias[diaSemana] || 'Dia não especificado';

const getMesText = (mesSelecionado) =>
    meses[mesSelecionado] || 'Mês não especificado';

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatData(data) {
    const diaSemana = data.getDay();
    const diaSemanaText = getDiaSemanaText(diaSemana);

    const mes = data.getMonth();
    const mesText = getMesText(mes);

    const dia = zeroAEsquerda(data.getDate());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    const resultadoData = `${diaSemanaText}, ${dia} de ${mesText} de ${ano} ${hora}:${minuto}:${segundo}`;

    return resultadoData;
}

const resultado = document.querySelector('.resultado');
setInterval(() => {
    resultado.innerHTML = formatData(new Date());
}, 1000);
