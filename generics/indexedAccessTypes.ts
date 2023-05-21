interface ICompany {
	name: string;
	debts: number;
	departments: Department[];
	management: {
		owner: string;
	}
}

interface Department {
	[key: string]: string;
}

// Так делать нельзя, будет ошибка, т.к. интерфейс так использовать мы не можем
// ICompany это определение типа
// type CompanyDebtsType = typeof ICompany.debts;

// Для того, чтобы получить тип свойства интерфейса используется такой синтаксис
// Indexed Access Types, доступ по индексному ключу
// type CompanyDebtsType = ICompany['debts'];

// Можно получать и вложенные типы
type CompanyOwnerType = ICompany['management']['owner'];
type CompanyDepartmentsTypes = ICompany['departments'];

// Можно строить и такие необычные комбинации
// Получаем union type
type Test = ICompany[keyof ICompany];

// Если бы Department был массивом, и нам нужно было бы получить один элемент
type CompanyDepartmentsType = ICompany['departments'][number];

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = 'debts';

// Как передать строку из переменно в определение
// const debts = 'debts'; // Это будет работать только с const, т.к. нам нужен определенный литерал
// let debts = 'debts' as 'debts'; // Если мы не может менять let, можно решить это приведением
let debts: 'debts' = 'debts'; // Либо так
// type CompanyDebtsType = ICompany[debts]; // Будет ошибка
type CompanyDebtsType = ICompany[typeof debts]; // Опять-таки нужно запрашивать тип

function printDebts<T, K extends keyof T, S extends keyof T>(
	company: T,
	name: K,
	debts: S
) {
	console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const google: ICompany = {
	name: 'Google',
	debts: 500000,
	departments: [{
		sales: 'sales',
		developer: 'dev',
	}],
	management: {
		owner: 'John',
	}
}

printDebts(google, 'name', 'debts');

type GoogleKeys = keyof typeof google;
const keys2: GoogleKeys = 'name';
