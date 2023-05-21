// Оператор keyof

interface ICompany {
	name: string;
	debts: number;
}

// Оператор keyof создает union тип из ключей
type CompanyKeys = keyof ICompany;
// const keys: CompanyKeys = 'nam'; // Будет ошибка
const keys: CompanyKeys = 'name';

console.log(keys)

// Этот оператор можно применить к Интерфейсам, Классам и Type
// В случае классов мы получим все публичные свойства

// function printDebts(company: ICompany, name: string) {
// 	console.log(`Company ${company[name]}, debts: ${company.debts}`);
// }
//
// const hh: ICompany = {
// 	name: 'HH',
// 	debts: 500000,
// }
//
// // Такой код в рантайме выдаст ошибку
// // Нам нужно четко сказать, что вторым аргументом при вызове функции допустимо использовать только те строки,
// // которые совпадают с ключами переданного объекта
// // Нужно сделать связь с объектом hh и строкой во втором аргументе
// printDebts(hh, 'abs');

// Либо name, либо debts
function printDebts<T, K extends keyof T, S extends keyof T>(
	company: T,
	name: K,
	debts: S
) {
	console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const hh: ICompany = {
	name: 'HH',
	debts: 500000,
}

printDebts(hh, 'name', 'debts');

const google = {
	name: 'Google',
	open: 'true',
}

printDebts(google, 'name', 'open');
