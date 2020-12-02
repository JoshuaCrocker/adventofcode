module.exports = function (rule, password) {
    const splitRule = rule.split(' ');
    const range = splitRule[0];
    const letter = splitRule[1];

    const rangeSplit = range.split('-');
    const pos1 = parseInt(rangeSplit[0]) - 1;
    const pos2 = parseInt(rangeSplit[1]) - 1;

    const letterInPos1 = password.substr(pos1, 1) == letter;
    const letterInPos2 = password.substr(pos2, 1) == letter;

    return (letterInPos1 && !letterInPos2) || (letterInPos2 && !letterInPos1);
};
