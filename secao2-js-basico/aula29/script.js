let numero = Number(prompt('Digite um número:'))
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>
Raiz quadrada: ${Math.sqrt(numero)}</br></br>
É NaN:${isNaN(numero)}</br></br>
${numero} É inteiro: ${Number.isInteger(numero)}
Arredondamento para baixo: ${Math.floor(numero)}</br></br>
Arredondamento para cima: ${Math.ceil(numero)}</br></br>
Com duas casas decimais: ${numero.toFixed(2)}</br></br>
</p>`;


/*
EXERCICIO

Insira um número e exiba na tela os seguintes resultados :

Número para inserir: 7.429586495895986

Raiz quadrada: 
${numero} É inteiro:
É NaN:
Arredondamento para baixo: 
Arredondamento para cima: 
Com duas casas decimais:
*/
