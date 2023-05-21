// Mapped types

type Currencies = {
	use: 'usd';
	china: 'cny';
	ukraine: 'uah';
	kz: 'tg';
}

// Что делать, если нужно использовать этот шаблон но разрешать менять изменять валюту самостоятельно
// Можно так, но если валют будет сотня это будет большое дублирование кода
// type CustomCurrencies = {
// 	usa: string;
// 	china: string;
// 	ukraine: string;
// 	kz: string;
// }

type ROnlyCurr = Readonly<Currencies>

// Синтаксис mapped types, работает только с type
// type СопоставимыйТип = {
// 	[ПроизвольныйИдентификатор in Множество]: Произвольный тип данных
// }

type Keys = 'name' | 'age' | 'role';

type User = {
	[K in Keys]: string // Получаем три новых поля, с значением string
}

const alex: User = {
	name: 'Alex',
	age: '25',
	role: 'admin'
}

type CreateCustomCurr<T> = {
	// можно использовать операторы readonly - readonly [P in keyof T]: string;
	// optional [P in keyof T]?: string;
	// + - +optional[P in keyof T]+?: string; - говорим добавь этот модификатор
	// - позволяет снимать
	[P in keyof T]: string;
}

type CustomCurrencies = CreateCustomCurr<Currencies>;