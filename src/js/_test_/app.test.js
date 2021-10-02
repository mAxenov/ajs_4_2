import { sortByHealth } from '../app.js';

describe('sortByHealth()', () => {
    test('check sort', () => {
        const received = sortByHealth([
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
        ]);

        const expected = [
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
            { name: 'мечник', health: 10 },
        ];
        expect(received).toEqual(expected);
    })
    test('check sort', () => {
        const received = sortByHealth([
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
        ]);

        const expected = [
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
            { name: 'мечник', health: 10 },
        ];
        expect(received).not.toBe(expected);
    })
})

