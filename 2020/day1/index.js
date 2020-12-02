const path = require('path');
const readInput = require('../../common/readInput');
const day1a = require('./day1a');
const day1b = require('./day1b');

const inputPath = path.join(__dirname, 'input.txt');
const data = readInput(inputPath, parseInt);

const results = {
    'Part 1': day1a(data),
    'Part 2': day1b(data),
};

console.table(results);
