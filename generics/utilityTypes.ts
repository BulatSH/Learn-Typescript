// Встроенные типы, которые позволяют производить манипуляции с другими типами

interface Currencies {
	usa: 'usd';
	china: 'cny';
	kz: 'tg';
}

// Omit исключает свойство, которое мы укажем
type CurrWithoutUSA = Omit<Currencies, 'usa'>;

// Pick - фильтрует типы по свойству
type CurrUSAAndChina = Pick<Currencies, 'usa' | 'kz'>

// Exclude - убирает из union типа свойство по условию
type FadeType = Exclude<MyAnimation, 'swipe'> // fade
type CountriesWithoutUSA = Exclude<keyof Currencies, 'usa'>

// Extract (Обратная функция Exclude) - выбирает подходящие типы по условию
// type SwipeType = Extract<MyAnimation, 'swipe'> // swipe
// Можно объединять
type SwipeType = Extract<MyAnimation | Direction, 'swipe'>;

type CreateCustomCurr<T> = {
	[P in keyof T as `custom${Capitalize<string & P>}`]: string;
}

// Record - позволяет сконструировать другой тип в формате ключ/значение
type PlayersNames = 'alex' | 'john';
type CustomCurrencies = CreateCustomCurr<Currencies>;
type GameDataCurr = Record<PlayersNames, CustomCurrencies>;

// Также если мы удалим какое-то свойство выше, то мы увидим ошибку и здесь, это большой плюс
const gameData: GameDataCurr = {
	alex: {
		customChina: 'qqq',
		customUsa: 'www',
		customKz: 'ttt',
	},
	john: {
		customChina: 'qqq',
		customUsa: 'www',
		customKz: 'ttt',
	}
}

type MyAnimation = 'fade' | 'swipe';
type Direction = 'in' | 'out';

type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;

function calculate(a: number, b: number): number {
	return a * b;
}

// ReturnType - Тип, который возращает функция
type CalculateTR = ReturnType<typeof calculate>; // number
let anotherResult: CalculateTR = 5;

// Parameters - типы аргументов
type CalculatePT = Parameters<typeof calculate> // Получим кортеж
type PT1 = Parameters<(a: number) => number>;
type PT2 = Parameters<<T>(arg: T) => T>;

// Constructor Parameters - получаем параметры класса
class Example {
	constructor(a: number) {
	}
}

type T0 = ConstructorParameters<typeof Example>

// Awaited - формирует тип, который возвращает промис
type FromPromise = Awaited<Promise<number>>; // number

interface User {
	name: string;
}

// Возвращает промис с пользователями
async function fetchUsers(): Promise<User[]> {
	return [
		{
			name: 'Alex',
		}
	];
}

const user = fetchUsers(); // Promise<User[]>

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; // User[]

// Есть и другой вариант, он использовался до 4.5 версии Ts
// infer - вытаскивает значение типа
type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;

type FetchDataReturnType = UnwrappedPromise<ReturnType<typeof fetchUsers>> // User[]
