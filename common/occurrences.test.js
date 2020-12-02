const occurrences = require("./occurrences");

test('it can determine if there are no occurrences', () => {
    const string = 'abcde';
    const needle = 'g';

    expect(occurrences(string, needle)).toBe(0);
});

test('it can determine if there is one occurrence', () => {
    const string = 'abbcccddd';
    const needle = 'a';

    expect(occurrences(string, needle)).toBe(1);
});

test('it can determine if there are multiple occurrences', () => {
    const string = 'abbcccdddd';
    const needle = 'c';

    expect(occurrences(string, needle)).toBe(3);
});
