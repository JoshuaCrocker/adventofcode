const day2a = require("./day2a");


describe('it can determine valid passwords', () => {
    test('case 1', () => {
        const rule = '1-3 a';
        const password = 'abcde';

        expect(day2a(rule, password)).toBe(true);
    });
    
    test('case 2', () => {
        const rule = '2-9 c';
        const password = 'ccccccccc';

        expect(day2a(rule, password)).toBe(true);
    });
});

describe('it can determine invalid passwords', () => {
    test('case 1', () => {
        const rule = '1-3 b';
        const password = 'cdefg';

        expect(day2a(rule, password)).toBe(false);
    });

    test('case 2', () => {
        const rule = '1-3 b';
        const password = 'cbbdebbfg';

        expect(day2a(rule, password)).toBe(false);
    });

    test('case 3', () => {
        const rule = '2-3 b';
        const password = 'cbdefg';

        expect(day2a(rule, password)).toBe(false);
    });
});
