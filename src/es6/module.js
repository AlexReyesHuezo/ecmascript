const hello = () => {
    return 'Hello';
}

// After
export default hello;


// Before
// with Node.js, we can use the CommonJS module syntax
module.exports = hello; // exports the function

const hello = require('./module'); // imports the function

// If we want to export more than one thing, we can use the object syntax
module.exports = { hello, bye };


// To force ES6 within Node.js, we need to create the files with .mjs extension and use the --experimental-modules flag with full path file in the terminal
// or set "type": "module" in package.json
node --experimental-modules ./path/to/file.mjs
file.mjs