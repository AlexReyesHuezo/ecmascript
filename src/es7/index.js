// Includes (Incluye)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/includes
// --------------------------------------------------------------------------------------------

// before
const arr = [1, 2, 3, 4, 5];

arr.indexOf(1) !== -1; // true
arr.indexOf(10) !== -1; // false

// after
let numbers = [1, 2, 3, 4, 5];

if (numbers.includes(1)) {
    console.log('The array includes the number 1');
}
else {
    console.log('The array does not include the number 1');
}


// Power operator (Operador de potencia)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/**
// --------------------------------------------------------------------------------------------

// before
let power = Math.power(2, 3);

// after
let base = 2;
let exponent = 3;
let result = base ** exponent;