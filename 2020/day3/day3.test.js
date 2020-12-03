const path = require('path');
const readInput = require('../../common/readInput');
const day3 = require('./day3');

test('it can calulate the answer', () => {
    const inputPath = path.join(__dirname, 'testdata.txt');
    const data = readInput(inputPath, (row) => row.split(''));

    expect(day3(data, 3, 1)).toBe(7);
});
