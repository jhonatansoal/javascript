//Desestruturação com arrays.

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

a="";
b="";
rest="";
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
console.log('*************************************************************');


[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]
console.log('*************************************************************');

console.log('*************************Assign Exemplo****************************');
var obj = {personCode: 123};
var obj2 = {personId: '1234'}
console.log(Object.assign(obj,obj2))
console.log('*************************************************************');

console.log('********************** objetos - exemplo *****************************');
var obj = {personCode: 123};
obj.personId = obj2.personId;
console.log(obj);
console.log('*************************************************************');

console.log('*********************[] - exemplo******************************');
var obj = {personCode: 123};
obj['personId'] = obj2.personId;
console.log(obj['personId']);
console.log('*************************************************************');
