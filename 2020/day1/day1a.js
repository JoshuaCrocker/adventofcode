module.exports = function (input) {
    const length = input.length;
    for (let a = 0; a < length; a++) {
        for (let b = 0; b < length; b++) {
            const num1 = input[a];
            const num2 = input[b];

            if (2020 == num1 + num2) {
                return num1 * num2;
            }
        }
    }

    return undefined;
};
