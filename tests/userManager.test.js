import { addUser, removeUser, findUser } from '../zadania/zadanie2/userManager';

let users = [];

beforeEach(() => {
	users = []; // Reset listy użytkowników przed każdym testem
});

test('Dodawanie użytkownika', () => {
	addUser(users, { id: 1, name: 'John' });
	expect(users.length).toBe(1);
	expect(users[0].name).toBe('John');
});

test('Usuwanie użytkownika', () => {
	addUser(users, { id: 1, name: 'John' });
	removeUser(users, 1);
	expect(users.length).toBe(0);
});

test('Znajdowanie użytkownika', () => {
	addUser(users, { id: 1, name: 'John' });
	const user = findUser(users, 1);
	expect(user.name).toBe('John');
});
