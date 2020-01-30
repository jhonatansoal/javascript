//Destructuring com arrays.

//Começaremos entendendo como funciona o destructuring em arrays.

let array = ['posição A', 'posição B', 'posição C', 'posição D', 'posição E'];
let [a, b, c, d, e] = array;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log('*************************************************************');

//Podemos utilizar o mesmo exemplo com spread operator:
let [s, y, ...x] = array;

console.log(s);
console.log(y);
console.log(x);
console.log('*************************************************************');

//Podemos utilizar para definirmos valores como padrão de uma mesma variável:

let [varA = 'Teste', varB = varA] = [];
console.log(varA);
console.log(varB);
console.log('*************************************************************');