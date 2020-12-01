const day1b = require('./day1b');

test('it calculates the correct output', () => {
    const input = [979, 366, 675];
    expect(day1b(input)).toBe(241861950);
});

test('it ignores incorrect values', () => {
    const input = [1721, 979, 366, 299, 675, 1456];
    expect(day1b(input)).toBe(241861950);
});
