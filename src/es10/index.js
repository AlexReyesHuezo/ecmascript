// Array Flat (Matriz plana)
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/flat
// ---------------------------------------------------------------------------------------------

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat()); // the depth of flattening is 1 by default

console.table(array.flat(2)); // the depth of flattening is 2