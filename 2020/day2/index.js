const path = require('path');
const readInput = require('../../common/readInput');
const day2a = require('./day2a');
const day2b = require('./day2b');

const inputPath = path.join(__dirname, 'input.txt');
const data = readInput(inputPath, (value) => value.split(':'));

let validPart1 = 0;
let validPart2 = 0;

for (let pair of data)
{
    validPart1 += day2a(pair[0].trim(), pair[1].trim()) ? 1 : 0;
    validPart2 += day2b(pair[0].trim(), pair[1].trim()) ? 1 : 0;
}

const results = {
    'Part 1': validPart1,
    'Part 2': validPart2,
};

console.table(results);

