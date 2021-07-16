let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

// console.log('Avalores atuais' + varA, varB, varC);

let r = varA;
let varA = varB // B
let varB = varC // C
let varC = r // A

alert(varA, varB, varC);

