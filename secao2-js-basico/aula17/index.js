// Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.92 Luiz Otávio Miranda nasceu em 1980

const nome = "Luiz Otávio Miranda";
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; //peso / (altura * altura)
let anoNascimento;

// Ano atual
const year = new Date().getFullYear();

// Calculo
imc = peso / (altura * altura);
anoNascimento = year - idade;

//Resultado
console.log('O meu nome é ', nome, 'tenho', idade, 'anos e peso', peso, 'kg. Tenho ', altura, 'de altura e meu IMC é de', imc, '. Nasci no ano de ', anoNascimento);

// Resultado com template string
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);