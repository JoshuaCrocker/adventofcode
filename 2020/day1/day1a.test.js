const day1a = require('./day1a');

test('it calculates the correct output', () => {
    const input = [1721, 299];
    expect(day1a(input)).toBe(514579);
});

test('it ignores incorrect values', () => {
    const input = [1721, 979, 366, 299, 675, 1456];
    expect(day1a(input)).toBe(514579);
});
