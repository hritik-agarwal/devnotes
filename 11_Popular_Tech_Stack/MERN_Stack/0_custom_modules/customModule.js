// Exporting Custom Modules
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

module.exports = {add, sub};

// Importing Custom Modules
const {add, sub} = require("./customModule");
console.log(add(2, 5));
console.log(sub(2, 5));

// Importing NPM Modules
const {format} = require("date-fns")