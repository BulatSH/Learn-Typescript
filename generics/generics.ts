// Обобщения. Что это и зачем нужно

// function processingData(data: string | number | boolean | string[]):
// 	string | number | boolean | string[] { // Можно написать что-то типа такого, но выглядит это мягко говоря плохо
// 	return data;
// }

// Мы поставили заглушку <T>, заменяется во время вызова
// Интерпретируется как какой-то типа, подставляется как аргумент
// И возвращаем этот же тип
function processingData<T>(data: T): T {
	return data;
}

const res1 = processingData(1); // 1
const res2 = processingData('1'); // '1'

const res3 = processingData<number>(10); // Конкретизируем тип

// Это было обобщение в общих чертах, но конечно есть много нюансов

interface PrintUK {
	design: number;
}

interface PrintES {
	design: string;
}

// T - это идентификатор, когда мы будем использовать этот интерфейс
// мы вместо заглушки, идентификатора, сможем передать какой-то тип
interface Print<T> {
	design: T;
}

// Пример

const somePrint: Print<string> = {
	design: 'ten',
}

const someOtherPrint: Print<number> = {
	design: 10,
}

// Обобщения можно создавать для: типов, интерфейсов, функций, методов и классов
// Для enum это делать нельзя

// Array<T> // Какие типы будут внутри этого массива

// ReferralSystem<T, S> // Тут лучше идентификаторы задать нормальным именем, чтобы было понятно
// ReferralSystem<UserID, UserReferrals>

// T U V S P(property) K/V(key/value)

// В TS еще есть и встроенные generics
