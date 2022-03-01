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
function foo(name, age, country) {
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
let greeting = 'Hi';
let person = 'Alex';
console.log(greeting + ' ' + person + '!');

// after
let greeting = 'Hello';
let folk = 'World';
console.log(`${greeting} ${folk}!`);


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