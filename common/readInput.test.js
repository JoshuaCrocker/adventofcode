const path = require('path');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const readInput = require('./readInput');

const inputFile = path.join(__dirname, 'readInput.data.txt');

test('it reads the input data into an array', () => {
    const output = readInput(inputFile);

    expect(output).toMatchObject([
        'this',
        'is',
        'the',
        'test',
        'data'
    ]);
});

test('it can call a processing callback on each line of data', () => {
    const output = readInput(inputFile, (value) => value.toUpperCase());

    expect(output).toMatchObject([
        'THIS',
        'IS',
        'THE',
        'TEST',
        'DATA'
    ]);
});
