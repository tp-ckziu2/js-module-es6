import math from '../zadania/zadanie3/math';

test('Dodawanie 2 + 3 = 5', () => {
	expect(math.add(2, 3)).toBe(5);
});

test('Odejmowanie 5 - 3 = 2', () => {
	expect(math.subtract(5, 3)).toBe(2);
});

test('Mnożenie 4 * 5 = 20', () => {
	expect(math.multiply(4, 5)).toBe(20);
});

test('Dzielenie 10 / 2 = 5', () => {
	expect(math.divide(10, 2)).toBe(5);
});

test('Dzielenie przez 0 rzuca błąd', () => {
	expect(() => math.divide(10, 0)).toThrow('Cannot divide by zero');
});
