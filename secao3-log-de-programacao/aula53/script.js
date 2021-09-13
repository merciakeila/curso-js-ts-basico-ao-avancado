let i = 0;
for (i; i <= 5; i++) {
    console.log('Linha: ', i);
}

//Exibindo se de 0 a 10 se são par ou impar
/*
let a = 0;
for (a; a <= 10; a++) {
    const par = a % 2 === 0;
    console.log(a, par);
}
*/

//Exibindo se de 0 a 10 se são par ou impar e também exibir uma mensagem
let a = 0;
for (a; a <= 10; a++) {
    const par = a % 2 === 0 ? 'Par' : 'Impar';
    console.log(a, par);
}