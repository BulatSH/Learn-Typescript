// Unknown - еще один примитивный тип, безопасный аналог any

// Ts не показывает никакой ошибки
// let smth: any;
// smth = 'str';
//
// let data: string[] = smth;
// data.find(e => e);

// Мы можем также сказать Ts, что мы не знаем, что получим
// В any может быть что угодно, а unknown - неизвестный тип, мы к нему ничего не можем применить
// let smth: unknown;
// smth = 'str';
//
// let data: string[] = smth; // Тут уже получим ошибку
// data.find(e => e);

// const someValue: any = 10;
// someValue.method(); // Ts не покажет ошибки

// const someValue: unknown = 10;
// someValue.method(); // Ts выдаст ошибку, поэтому на неизвестно чем, мы не может выполнить метод

function fetchData(data: unknown): void {
	// С помощью сужения, мы можем работать с аргументом типа unknown
	if (typeof data === 'string') {
		console.log(data.toLowerCase());
	}
}

const userData = '{"ageData" : 40, "nameData": "John"}';

function safeParse(s: string): unknown {
	return JSON.parse(s);
}

const data = safeParse(userData); // У data тип unknown
// Мы не получим ошибок от any

function transferData(d: unknown): void {
	if (typeof d === 'string') {
		console.log(d.toLowerCase());
		// null тоже объект, поэтому добавим дополнительное условие наличия d
	} else if (typeof d === 'object' && d) {
		console.log(data);
	} else {
		console.error('Some error')
	}
}

transferData(data);

// Unknown всегда будет перекрывать другие типы, кроме any
type T0 = any | unknown;
type T1 = number | unknown;
