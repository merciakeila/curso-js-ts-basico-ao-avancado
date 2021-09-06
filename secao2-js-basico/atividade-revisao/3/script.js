//Número para inserir: 7.429586495895986

const numero = 7.429586495895986;

const num = Number(numero);
document.body.innerHTML += `Exibir o número inteiro: ${Math.sqrt(num)} <br />`;

document.body.innerHTML += `É NaN: ${isNaN(num)} <br />`;
document.body.innerHTML += `Arredondamento para baixo: ${Math.floor(
    numero
)} <br />`;
document.body.innerHTML += `Arredondamento para cima: ${Math.ceil(
    numero
)} <br />`;
document.body.innerHTML += `Com duas casas decimais: ${parseFloat(
    numero.toFixed(2)
)} <br />`;
