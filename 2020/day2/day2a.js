const occurrences = require('../../common/occurrences');

module.exports = function (rule, password) {
    const splitRule = rule.split(' ');
    const range = splitRule[0];
    const letter = splitRule[1];

    const rangeSplit = range.split('-');
    const min = parseInt(rangeSplit[0]);
    const max = parseInt(rangeSplit[1]);

    const occurCount = occurrences(password, letter);

    return occurCount >= min && occurCount <= max;
};
