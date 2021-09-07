function getDiaSemanaText(diaSemana) {
    let diaSemanaText;

    switch (diaSemana) {
        case 0:
            diaSemanaText = 'Domingo';
            return diaSemanaText;
        case 1:
            diaSemanaText = 'Segunda';
            return diaSemanaText;
        case 2:
            diaSemanaText = 'Terça';
            return diaSemanaText;
        case 3:
            diaSemanaText = 'Quarta';
            return diaSemanaText;
        case 4:
            diaSemanaText = 'Quinta';
            return diaSemanaText;
        case 5:
            diaSemanaText = 'Sexta';
            return diaSemanaText;
        case 6:
            diaSemanaText = 'Sabádo';
            return diaSemanaText;
        default:
            diaSemanaText = 'Não especificado';
            return diaSemanaText;
    }
}

const data = new Date('2021-08-6 21:01');
const diaSemana = data.getDay();
const diaSemanaText = getDiaSemanaText(diaSemana);

console.log(diaSemana, diaSemanaText);
