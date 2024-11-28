import Rectangle from '../zadania/zadanie1/rectangle';

test('Obliczanie pola prostokąta 5x10', () => {
	const rect = new Rectangle(5, 10);
	expect(rect.area()).toBe(50);
});

test('Obliczanie obwodu prostokąta 5x10', () => {
	const rect = new Rectangle(5, 10);
	expect(rect.perimeter()).toBe(30);
});
