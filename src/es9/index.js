// Rest operator ... (Operador Resto)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/rest_parameters
// --------------------------------------------------------------------------------------------

// The value of a property can be extracted from an object without it having been constructed yet.

const obj = {
    user: 'John',
    age: 30,
    country: 'CA',
};

let {
    user,
    ...rest
} = obj;
console.log(user, rest);

let {
    country,
    ...all
} = obj;
console.log(all);

// Structuring objects using rest operator

const obj1 = {
    name: 'John',
    age: 30,
}

const obj2 = {
    ...obj1,
    country: 'CA',
}

console.log(obj2);

// Promise.finally()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
// --------------------------------------------------------------------------------------------

// We can know when a promise is resolved or rejected, and execute a function or other logic after that.

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Hello, world!'), 3000): reject(new Error('Test error'));
    });
};

helloWorld().then(response => console.log(response)).catch(error => console.log(error.message)).finally(() => console.log('Finally'));

// Named Capture Groups in RegExps (Capturas de grupos nombrados en expresiones regulares)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/groups

const regexData = /^(\d{4})-(\d{2})-(\d{2})$/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);