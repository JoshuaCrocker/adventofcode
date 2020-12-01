const path = require('path');
const readlines = require('n-readlines');
const day1a = require('./day1a');
const day1b = require('./day1b');

const inputPath = path.join(__dirname, 'input.txt');
const input = new readlines(inputPath);

const data = [];

let line;
while (line = input.next()) {
    data.push(parseInt(line.toString('utf8')));
}

const results = {
    'Part 1': day1a(data),
    'Part 2': day1b(data),
};

console.table(results);
