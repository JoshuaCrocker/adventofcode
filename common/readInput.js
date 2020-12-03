const readlines = require('n-readlines');

const defaultCb = (value) => value;

module.exports = function (inputFile, processingCb) {
    if (processingCb == undefined || !processingCb) {
        processingCb = defaultCb;
    }

    const input = new readlines(inputFile);

    const data = [];

    let line;
    while ((line = input.next())) {
        data.push(processingCb(line.toString('utf8')));
    }

    return data;
};
