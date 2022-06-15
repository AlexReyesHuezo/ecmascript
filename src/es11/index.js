// Dynamic import
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// --------------------------------------------------------------------------------------------

const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    const module = await import('./module.js');
    module.hello();
});


// BigInt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
// --------------------------------------------------------------------------------------------

const bigInt = BigInt(1234567890123456789012345678901234567890);
const anotherBigInt = 1234567890123456789012345678901234567890n;

console.log(bigInt);
console.log(anotherBigInt);


// Promise.allSettled()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
// --------------------------------------------------------------------------------------------

// unlike promise.all, this method returns a single promise that resolves when all the promises in the array have resolved or reject.

const promise1 = new Promise((resolve, reject) => reject('error'));
const promise2 = new Promise((resolve, reject) => resolve('success'));
const promise3 = new Promise((resolve, reject) => reject('error'));
const promise4 = new Promise((resolve, reject) => resolve('success'));
const promise5 = new Promise((resolve, reject) => resolve('success'));

Promise.allSettled([promise1, promise2, promise3, promise4, promise5])
    .then(results => console.log(results));


// globalThis
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
// --------------------------------------------------------------------------------------------

console.log(window);
console.log(globalThis); // It's the same as window in the browser.