module.exports = function (input) {
    const length = input.length;
    for (let a = 0; a < length; a++) {
        for (let b = 0; b < length; b++) {
            for (let c = 0; c < length; c++) {
                const num1 = input[a];
                const num2 = input[b];
                const num3 = input[c];

                if (2020 == num1 + num2 + num3) {
                    return num1 * num2 * num3;
                }
            }
        }
    }

    return undefined;
};
