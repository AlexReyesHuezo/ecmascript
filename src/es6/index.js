// let, const - ES6
// -----------------------------------------------------------------------------

// before
{
    var globalVar = 'var';
}
console.log(`${globalVar}: is available in all code blocks`);

// after
{
    let globalLet = 'let';
    console.log(`${globalLet}: is only available in the code block where it is defined`);
}

const bar = 'const';
// bar = 20;
console.log(`${bar}: is an 'constant variable', does not allow to change its value`);


// Default params (Parámetros por defecto)
//------------------------------------------------------------------------------

// before
function foo(cognomen, age, country) {
    var cognomen = cognomen || 'Guest';
    var age = age || 25;
    var country = country || 'UKR';

    console.log(cognomen, age, country);
}

foo();
foo('John', 30, 'USA');

// after
function foobar(cognomen = 'Host', age = 27, country = 'CAN') {
    console.log(cognomen, age, country);
}

foobar();
foobar('Alex', 26, 'SLV');


// Template literals `${} '' ${}` (Literales de plantillas)
// -----------------------------------------------------------------------------

// before
let greet = 'Hi';
let dude = 'Alex';
console.log(greet + ' ' + dude + '!');

// after
let salute = 'Hello';
let folk = 'World';
console.log(`${salute} ${folk}!`);


// Multiline with backticks `` (Multilínea con acentos graves)
// -----------------------------------------------------------------------------

// before
let phrase = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
    'Nesciunt, quibusdam, aliquam, quisquam,\n' +
    'voluptate, veritatis, tempora, obcaecati.\n';

console.log(phrase);

// after
let quote = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Nesciunt, quibusdam, aliquam, quisquam,
voluptate, veritatis, tempora, obcaecati.`;

console.log(quote);


// Destructuring (Desestructuración)
// -----------------------------------------------------------------------------

// before
const person = {
    forename: 'Xi',
    age: 27,
    country: 'CHN'
}

console.log(person.forename, person.age, person.country);

// after

let { forename, age, country } = person;
console.log(forename, age, country);

// destructuring arrays
const meal = ['🫓', '🍔', '🥪', '🥟', '🥘'];
const [Pupusa, Hamburguesa, Sándwich, Empanada, Paella] = meal;
console.log(Pupusa, Hamburguesa, Sándwich, Empanada, Paella);


// Spread operator ... (Operador de expansión)
// -----------------------------------------------------------------------------

// before
const frontendTeam = ['ManzDev', 'midudev', 'CarlosAzaustre', 'SeDiceMashain', 'Baumannzone'];
const backendTeam = ['GNDX', 'julianduque', 'GuillermoRodas', 'hdeleon.net', 'fazzttech'];

var allTeam = ['jonmircha', frontendTeam, 'Hola Mundo', 'MoureDev', backendTeam];
console.table(allTeam);

// after
let streamers = ['jonmircha', ...frontendTeam, 'Hola Mundo', 'MoureDev', ...backendTeam];
console.table(streamers);


// Arrow functions (Funciones flecha)
// -----------------------------------------------------------------------------

// before

// Simple anonymous function (función anónima simple)
const username = [
    {name: 'Pedro', generation: '1'},
    {name: 'Juan', generation: '2'},
    {name: 'Marta', generation: '3'},
];

let listOfNames = username.map(function (user) {
    console.log(user.name);
});

// after
let listOfUsers = username.map(user => console.log(user.name));

// other examples with arrow functions

// with arrow functions, we can omit the return keyword
let listOfUsers2 = username.map(user => user.name);
// with arrow functions, we can omit the curly braces
let listOfUsers3 = username.map(user => `${user.name} (${user.generation})`);
// with arrow functions, we can return an object using the object literal syntax
const listOfUsers4 = username.map(({ user, generation }) => `${user} (${generation})`);
// with arrow functions, we can add a lot of parameters
const listOfUsers5 = (name, generation) => `${name} (${generation})`;


// Promises (Promesas)
// -----------------------------------------------------------------------------

// before

// after
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello');
        }, 1500);

        setTimeout(() => {
            reject('Something went wrong');
        }, 2500);
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hello again'))
    .catch(error => console.log(error));


// Params in objects (Parámetros en objetos)
// -----------------------------------------------------------------------------

// before
let noun = 'Alex';
let years = 27;

target = { noun: noun, years: years };

// after
// In ES6, you can use the same name for the property and the parameter
targetPerson = { noun, years };
console.log(targetPerson);


// Classes (Clases)
// -----------------------------------------------------------------------------

// before

// after
class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));


// Modules (Módulos)
// -----------------------------------------------------------------------------

// before
const hello = require('./module');
console.log(hello());

// We can import multiple things with object syntax

// after
// with Babel, we can use the ES6 import syntax
// We don't need to named the file with the same name as the module
import {hello} from './module';
console.log(hello());

// We can named different like this:
import { hello, bye as byeFunction} from './module';

// We can import multiple things
import * as allGreetings from './module'

console.log(allGreetings.hello())
console.log(allGreetings.bye)

// Generators (Generadores)
// -----------------------------------------------------------------------------

// before


// after

function * helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'world!';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);