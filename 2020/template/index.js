const path = require('path');
const readInput = require('../../common/readInput');

const inputPath = path.join(__dirname, 'input.txt');
const data = readInput(inputPath, parseInt);

const results = {
    // 'Part 1': day1a(data),
    // 'Part 2': day1b(data),
};

console.table(results);
