// replaceAll
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// --------------------------------------------------------------------------------------------------------------------

const string = "JavaScript is marvelous, with JavaScript it's possible to do anything.";
const regex = /javascript/gi;

const replacedString = string.replaceAll(regex, "PHP");
console.log(replacedString);


// Private class fields
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
// --------------------------------------------------------------------------------------------------------------------

class Message {
    #show(value) {
        console.log(value);
    }
    get #getMessage() {
        return "Hello World";
    }
    set setMessage(value) {
        this.#show(value);
    }
};

const message = new Message();
message.getMessage();


// promise.any
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
// --------------------------------------------------------------------------------------------------------------------
const promise1 = new Promise((resolve, reject) => reject(new Error("Error")));
const promise2 = new Promise((resolve, reject) => resolve("Success"));
const promise3 = new Promise((resolve, reject) => reject("Successfully"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


// WeakRefernce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRefernce
// --------------------------------------------------------------------------------------------------------------------

class anyClass {
    constructor(element) {
        this.weakRef = new WeakRefernce(element);
    }
    getWeakRef() {
        return this.weakRef;
    }
};


// New assignment expressions and operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
// --------------------------------------------------------------------------------------------------------------------

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);