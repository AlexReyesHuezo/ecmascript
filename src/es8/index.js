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


// Async await (Espera asíncrona)
// ------------------------------------------------------------

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello, world!'), 3000)
            : reject(new Error('Test error'));
    });
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();