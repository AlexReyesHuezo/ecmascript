// Object entries (Entradas de objeto)
// ------------------------------------------------------------

// before

// after
const data = {
    Frontend: 'Juan',
    Backend: 'Pedro',
    Design: 'Ana'
};

// return the keys and values of the object inside an array
let entries = Object.entries(data);
console.table(entries);
// It´s very useful to know how many entries there are in an object.
console.log(entries.length);

const details = {
    Frontend: 'Juan',
    Backend: 'Pedro',
    Design: 'Ana'
};


// Object values (Valores de objeto)
// ------------------------------------------------------------

// Transform the object into an array of values
const values = Object.values(details);
console.log(values);
console.log(values.length);

// also exist the method Object.keys()


// Padding (Relleno)
// ------------------------------------------------------------

const item = 'Hello';
console.log(item.padStart(7, '👋🏻'));
console.log(item.padEnd(7, '😜'));


// Trailing comma (Coma final)
// ------------------------------------------------------------

// before
const fantastic = {
    '👽': 'Alien'
}

// after
const fabled = {
    '🦄': 'unicorn',
}