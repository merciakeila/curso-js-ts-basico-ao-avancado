//Completo
const data = new Date();
console.log(data.toString());

console.log('Dia de hoje: ', data.getDate());
console.log('Mês: ', data.getMonth());
console.log('Ano: ', data.getFullYear());
console.log('Hora: ', data.getHours());
console.log('Minutos: ', data.getMinutes());
console.log('Segundos: ', data.getSeconds());
console.log('Milesegundos: ', data.getMilliseconds());
console.log('Dia da semana: ', data.getDay());

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMoth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data = new Date();
const dataBrsil = formataData(data);
console.log(dataBrasil);
