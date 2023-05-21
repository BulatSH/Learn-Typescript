// Условные типы

// Condition ? true : false;

// Создание простого условного типа
type Example = 'string' extends 'Hello' ? string : number; // Условие будет number

// Базовый синтаксис
// SomeType extends OtherType ? TrueType : FalseType
// 1. Условные типы всегда предполагают использование ограничения
// 2. Работаем с типами, даже 'Hello' выше будет литеральным типом

// Но смысла от этого больше в Generics
type FromUserOrFromBase<T extends string | number> = T extends string
	? IDataFromUser
	: IDataFromBase;

const test: FromUserOrFromBase<number> = {calories: 10};

interface User<T extends 'created' | Date> {
	created: T extends 'created' ? 'created' : Date;
}

const user: User<'created'> = {
	created: 'created',
}

interface IDataFromUser {
	weight: string;
}

interface IDataFromBase {
	calories: number;
}

// function calculateDailyCalories(str: string): IDataFromUser;
// function calculateDailyCalories(num: string): IDataFromBase;
function calculateDailyCalories<T extends string | number>(
	numOrStr: T
): T extends string ? IDataFromUser : IDataFromBase {
	if (typeof numOrStr === 'string') {
		return {
			weight: numOrStr,
		} as FromUserOrFromBase<T>;
	} else {
		return {
			calories: numOrStr,
		} as FromUserOrFromBase<T>;
	}
}

// Условия могут разветвляться
type GetStringType<T extends 'hello' | 'world' | string> = T extends 'hello'
	? 'hello'
	: T extends 'world'
		? 'world'
		: string;

// Оператор infer нужен, чтобы вытащить определенный тип из какой-то сущности
type GetFirstType<T> = T extends Array<infer First> ? First : T;
type Ex = GetFirstType<number>; // number
type Ex1 = GetFirstType<number[]>; // number

type ToArray<Type> = Type extends any ? Type[] : never;

type ExArray = ToArray<Ex1 | string>;
