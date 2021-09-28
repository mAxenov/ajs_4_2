import { getColorHealth } from '../app.js';

describe('getColorHealth()', () => {
    test('check healthy', () => {
        expect(getColorHealth({ name: 'Маг', health: 51 })).toBe('healthy');
    })

    test('check getColorHealth', () => {
        expect(getColorHealth({ name: 'Маг', health: 50 })).toBe('wounded');
    })

    test('check getColorHealth', () => {
        expect(getColorHealth({ name: 'Маг', health: 14 })).toBe('critical');
    })


})

