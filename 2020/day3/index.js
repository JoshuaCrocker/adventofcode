const path = require('path');
const readInput = require('../../common/readInput');
const day3 = require('./day3');

const inputPath = path.join(__dirname, 'input.txt');
const data = readInput(inputPath, (row) => row.split(''));

const r1d1 = day3(data, 1, 1);
const r3d1 = day3(data, 3, 1);
const r5d1 = day3(data, 5, 1);
const r7d1 = day3(data, 7, 1);
const r1d2 = day3(data, 1, 2);

const results = {
    'Part 1': r3d1,
    r1d1: r1d1,
    r3d1: r3d1,
    r5d1: r5d1,
    r7d1: r7d1,
    r1d2: r1d2,
    'Part 2': r1d1 * r3d1 * r5d1 * r7d1 * r1d2,
};

console.table(results);
