let arrayA = [2, 4, 6, 8, 10];
let arrayB = [1, 3, 5, 7, 9];
let total = [];

// Era assim 
/*
for ( var i = 0; i < arrayA.length; i++ ) {
    if ( arrayA.indexOf( arrayA[ i ] ) === i ) {
      total.push(arrayA[ i ] + arrayB[ i ]);
    }
}
*/

// Ficou assim 
arrayA.filter((elem,i)=>{
  total.push(elem + arrayB[i]);
}, total);

console.log(total);





