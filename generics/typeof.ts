// Typeof в generics

function printDebts<T, K extends keyof T, S extends keyof T>(
	company: T,
	name: K,
	debts: S
) {
	console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const google = {
	name: 'Google',
	open: 'true',
}

printDebts(google, 'name', 'open');

// Будет ошибка, т.к. keyof применяется к типу, а не значению
// type GoogleKeys = keyof google;

// Как нам полуить ключи из экземпляра объекта?
// С помощью оператора typeof можно сделать запрос типа
type GoogleKeys = keyof typeof google;

const keys: GoogleKeys = 'name';
