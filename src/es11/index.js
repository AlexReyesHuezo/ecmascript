// Dynamic import
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// --------------------------------------------------------------------------------------------

const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    const module = await import('./module.js');
    module.hello();
});