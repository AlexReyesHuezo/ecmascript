// Array Flat (Matriz plana)
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/flat
// ---------------------------------------------------------------------------------------------

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat()); // the depth of flattening is 1 by default

console.table(array.flat(2)); // the depth of flattening is 2

// Array Flat Map (Matriz plana y mapeada)
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/flatMap
// ---------------------------------------------------------------------------------------------

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.flatMap(number => [number, number * 2]));

// Trim Start y Trim End (Delete spaces at the start and end of a string)
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/trimStart
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/trimEnd
// ---------------------------------------------------------------------------------------------

let hello = "   Hello World!  ";

console.log(hello);

console.log(hello.trimStart().trimEnd());

// Try Catch without Error parameter
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Try_catch
// ---------------------------------------------------------------------------------------------

// Before

try {
    console.log("Hello World!");
} catch (error) {
    console.log(error);
}

// after
try {
    console.log("Hello World!");
} catch {
    console.log(error);
}

// fromEntries (Convertir un array de pares clave/valor en un objeto)
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/fromEntries
// ---------------------------------------------------------------------------------------------

let fromEntries = [["name", "John"], ["age", 24]];

console.log(Object.fromEntries(fromEntries));

// symbol.description (Obtener la descripción de un elemento tipo símbolo)
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Symbol/description
// ---------------------------------------------------------------------------------------------

let mySymbol = "Symbol's description";
let symbol = Symbol(mySymbol);

console.log(symbol.description);