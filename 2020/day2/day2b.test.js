const day2b = require("./day2b");


describe('it can determine valid passwords', () => {
    test('case 1', () => {
        const rule = '1-3 a';
        const password = 'abcde';

        expect(day2b(rule, password)).toBe(true);
    });
    
    test('case 2', () => {
        const rule = '2-9 c';
        const password = 'abdefghic';

        expect(day2b(rule, password)).toBe(true);
    });
});

describe('it can determine invalid passwords', () => {
    test('case 1', () => {
        const rule = '1-3 b';
        const password = 'babsd';

        expect(day2b(rule, password)).toBe(false);
    });

    test('case 2', () => {
        const rule = '1-2 c';
        const password = 'ccabc';

        expect(day2b(rule, password)).toBe(false);
    });

    test('case 3', () => {
        const rule = '2-3 b';
        const password = 'abbaab';

        expect(day2b(rule, password)).toBe(false);
    });
});
