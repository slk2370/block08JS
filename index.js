let code1;
code1 = 7 + 3;
const code2 = 50 + 5 - 15;
const code3 = 40 - 2 + 3 % 2; 
const message = `"The vault has been secured. The combination is:`;
const codeA = code1 + code2 + code3;
const codeB = `${code1}${code2}${code3}`;
console.log(message, codeA + codeB);